var http=require("http");
 var fs=require("fs");
 var qs=require("querystring");
 var net=require("./netPay");
 
 MongoClient=require('mongodb').MongoClient;
 http.createServer(function(req,res){
     console.log(req.method)
     if(req.method=="GET") {
        res.end(` <!DOCTYPE html>
         <html>
         <head>
         <title>Employee Details</title>
         </head>
         <body>
             <h1>Employee Details</h1>
             <form action="/" method="post">
           
                 <label>Employee id</label>
                 <input type="text" id="eid" name="eid"/></br>
                 <button>delete</button>
                
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
             
             var eid=parseFloat(obj.eid);
            
             MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
             if(err){
            
                 console.log(err);
                }
             else{
               
                 db.collection("newemployee").remove({"eId": eid},function(err,result) {
            
               
                    if(err) throw err;
                    
                   else
                   {
                     
                     res.end(`
                         <!DOCTYPE html>
                         <html>
                         <head>
                         <title>form results</title> </head>
                         <body>
                         <h1>form results</h1>
                         <p>Deleted Successfully</p>
                         </body>
                         </html>`);
                    
                   }
          
                });
             }
                 
             db.close();
            
             });
    
 
     });
     }
 }).listen(3000);
 console.log("Form server listening on port 3000");