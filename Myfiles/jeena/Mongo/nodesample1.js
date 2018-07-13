var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var fh=require("./tempbl");
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
            var obj=qs.parse(body);
            console.log(obj.fahren);
            fahren=parseFloat(obj.fahren);
            var celsius=fh.getCelsius(fahren);   
           
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
                placeholder="${ fahren}" required/>  
                <label>Celsius</label>
                <input type="text" id="celsius" name="celsius" value="${celsius}"/>      
                <button>covert</button>
            </form>
        </body>
        </html>
        `);
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
}).listen(3001);
console.log("Form server listening on port 3000");



