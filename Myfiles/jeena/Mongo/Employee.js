var http=require("http");
//var fs=require("fs");
var qs=require("querystring");
var Employee=require("./netpay");
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
            <table>
                <tr>
                    <td><label>Employee id:</label></td>
                    <td><input type="text" id="eid" name="eid"/></td>
                </tr>
                <tr>
                <td><label>Employee Name:</label></td>
                <td><input type="text" id="ename" name="ename"/></td>
                </tr>
                <tr>
                <td><label>BasicPay:</label> </td>
                <td><input type="text" id="basic" name="basic"/> </td>
                </tr>
                <tr><td colspan="2"><button>calculate netpay</button></td></tr>
                <tr>
                <td><label>NetPay:</label></td>
                <td><input type="netpay" id="ename" name="netpay"/></td>
                </tr>    
             </table  
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
            console.log(obj.basic);
            var eid=parseFloat(obj.eid);
            var ename=obj.ename;
            var basic=parseFloat(obj.basic);
            var emp=new Employee(eid,ename,basic);
            var netpay=emp.getNetpay();
            //var netpay=net.getNetpay(basic);   
            
        res.end(` <!DOCTYPE html>
        <html>
        <head>
        <title>Fill out this form</title>
        </head>
        <body>
            <h1>fill out this form</h1>
            <form action="/" method="get">
                <label>Employee id:</label>
                <input type="text" id="eid" name="eid" value="${eid}"/></br>
             
                <label>Employee Name:</label>
                <input type="text" id="ename" name="ename" value="${ename}"/></br>
                <label>BasicPay:</label>
                <input type="text" id="basic" name="basic" value="${basic}"/></br>
                <label>NetPay:</label>
                <input type="netpay" id="ename" name="netpay" value="${netpay}"/></br>
                     
                <button>calculate netpay</button>
            </form>
        </body>
        </html>
        `);
        MongoClient.connect('mongodb://127.0.0.1:27017/bank',function(err,db){
            if(err){
           
                console.log(err);
               }
            else{
           
                 db.collection('newemployee').insert({"eId":eid,"eName":ename,
                 "basicPay":basic,"netPay":netpay},function(err, result){
                 if(err) throw err;
                 
         
               })
            }
                
            db.close();
        });
        });
    }
}).listen(3000);
console.log("Form server listening on port 3000");
