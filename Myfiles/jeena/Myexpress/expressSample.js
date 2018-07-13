
/* const express=require("express");
const app=express();

app.get("/temptemponv/ftoc/:fareh",function(request,response)
{
   
   var reult= fToC(request.params.fareh)
    //console.log(request.url);
    console.log(reult);
  
    response.write("celcius is "+reult);
    response.end();

})
app.get("/lnt",function(request,response)
{
    
    console.log(request.url);
    console.log(request.method);
    response.write("hello  lnt world");
    response.end();
})
app.listen(3000);
console.log("server started at 3000");

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
   console.log(message);
   return message;
}  */

const express=require("express");
const app=express();

app.get("/resct/area/:length/:breadth",function(request,response)
{
   
   var reult= fToC(request.params.length,request.params.breadth)
    
   
   //console.log(request.url);
    console.log(reult);
  
    response.write("area is "+reult);
    response.end();

})
app.get("/lnt",function(request,response)
{
    
    console.log(request.url);
    console.log(request.method);
    response.write("hello  lnt world");
    response.end();
})
app.listen(3000);
console.log("server started at 3000");

function fToC(length,breadth) 
{
  
   return length*breadth;
} 
