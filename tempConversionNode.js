var http=require("http");
MongoClient=require('mongodb').MongoClient;
http.createServer(function(req,res){
    console.log(req.method)
    if(req.method=="GET") {
       res.end(` <!DOCTYPE html>
        <html>
        <head>
        <title>Fill out this form</title>
        </head>
        <body>
            <h1>fill out this form</h1>
            <form action="/" method="post">
                <label>Fahren</label>
                <input type="text" id="fahren" name="fahren"
                placeholder="Fahrenheit temperature" required/>  
                <label>Celsius</label>
                <input type="text" id="celsius" name="celsius"/>
                     
                <button>covert</button>
            </form>
        </body>
        </html>
        `);
    } else if(req.method=="POST"){
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end",function(){
            var obj=JSON.parse(body);
            console.log(obj.fahren);
            fahren=parseFloat(obj.fahren);
            var celsius=(5/9)*(fahren-32);   
            res.end(JSON.stringify(celsius));
            
        MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
            if(err){
           
                console.log(err);
               }
            else{
           
                 db.collection('temperature').insert({"Fahren":fahren
                  ,"Celsius":celsius},function(err, result){
                 if(err) throw err;
                 
         
               })
            }
                
            db.close();
        });
        });
    }
}).listen(3002);
console.log("Form server listening on port 3000");



