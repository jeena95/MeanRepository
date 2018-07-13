
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
                 <button>get details</button>
                
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
               
                 db.collection("newemployee").find({"eId": eid}).toArray(function(err, result) {
            
               
                    if(err) throw err;
                    
                   else
                   {console.log(result)
                      var resl=result;
                    
                     console.log(result[0].eId);
                     console.log(result[0].eName);
                     var eId1 = result[0].eId;
                     res.end(`
                         <!DOCTYPE html>
                         <html>
                         <head>
                         <title>form results</title> </head>
                         <body>
                         <h1>form results</h1>
                        <p> id Id ${eId1}</p>
                        <p>name is ${result[0].eName}</p>
                        <p> basic pay ${result[0].basicPay}</p>
                        <p> net pay is ${result[0].netPay}</p>
                         </body>
                         </html>`);
                       
                   }
          
                })
             }
                 
             db.close();
            
             });
    
 
     });
     }
 }).listen(3000);
 console.log("Form server listening on port 3000");