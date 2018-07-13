var sample=require("./sample");
//var result=sample.factorial(5);
//console.log(result);
//console.log(sample.factorial(5));
//console.log(sample.findpower(2,3));

var path=require("path");
//console.log(path.dirname("D:\\jeena\\sample1.js\\sample1.exe"));
//console.log(path.basename("D:\\jeena\\sample1.js\\sample1.exe"));
//console.log(path.extname("D:\\jeena\\sample1.js\\sample1.exe"));
var os=require("os");
//console.log(os.cpus().length);
// console.log(os.freemem());

//console.log("Before assert");
var a=10;
//console.assert(a==11,"a is not equal to 10");
//console.log("after assert");
//console.log(os.hostname());
//console.log(os.release());
//console.log(os.type());
var fs =require("fs");
//try{
//var data =fs.readFileSync('input.txt');
//console.log("sycchronous read "+data.toString());

//}
//catch(err)
//{
    //console.log("error=>"+err);
//}
//console.log("program ended");

//fs.readdir('input.txt',function(err,data){
    //if(err)
    {
        //console.log(err);
    }
    //else
    {
       // console.log("asynchronous read: "+data.toString());
    }
    //});
    //fs.readdir('./abc',function(err,files){
        //if(err)
        {
            //console.log(err);
        }
       // else
        {
            //console.log(files);
        }
       // });


        //fs.mkdir('new',function(err){
            //if(err)
            {
               // console.log(err);
            }
           // else
            {
               // console.log("created");
            }
            //});

            
        //fs.rmdir('new',function(err){
            //if(err)
            {
                ///console.log(err);
            }
           // else
            {
                //console.log("deleted");
            }
            //});

            //fs.link('input.txt','input-copy.txt',function(err){
               // if(err)
                {
                   // console.log(err);
                }
               // else
                {
                    //console.log("copied");
                }
               // });

                //fs.unlink('input.txt',function(err){
                   // if(err)
                    {
                       // console.log(err);
                    }
                    //else
                    {
                       // console.log("removed");
                    }
                   // });

    //fs.link(process.argv[2],'input.txt',function(err){
               // if(err)
                {
                    //console.log(err);
                }
              // else
                {
                   // console.log("copied");
                }
               // });

               //fs.writeFile('input.txt','hello',function(err){
               //  if(err)
                 {
                     //console.log(err);
                 }
               // else
                 {
                     //console.log("copied");
                 }
                 //});
                 //fs.appendFile('input.txt','jeena',function(err){
                   // if(err)
                    {
                        //console.log(err);
                    }
                  // else
                    {
                        //console.log("copied");
                    }
                   // });

                   // var num=[10,20,30];
                    
                    //for(ele in num)
                    {
                        //console.log (ele);
                    }
                   // console.log(num);
                   // var countries=["india","china"];
                   // countries.forEach(f1)
                   // function f1(value)
                    {
                       /// console.log(value);
                    }
                    
                   // var numbers=[10,20];
                    //var sum=0;
                    //var avg=0;
                   // numbers.forEach(fnum)
                    //function fnum(value)
                    {
                       //sum += value;
                    }
                   // avg=sum/numbers.length;
                   // console.log("sum = "+sum);
                   // console.log("average = "+avg);

                   // var numbers=[10,20,30,40];
                    //var sum=0;
              
                   // numbers.forEach(fnum)
                   
                    //function fnum(value,index)
                    {
                        //if(index%2==0)
                        {
                      // sum += value;
                        }
                    }
              
                   // console.log("sum = "+sum);
 //if(process.argv.length<=2){
 // console.log("usage :"+__filename+"path/to");
  //process.exit(-1);
 // }
// var path=process.argv[2];
 //fs.stat(path,function(err,stats){
 //if(stats.isFile()){
 //console.log("Regular file");
 //}
// if(stats.isDirectory()){
                
// console.log("directory");
 //}
// console.log("size"+stats["size"]);
 //console.log(stats);
// });
var fs =require("fs");
var path = require('path');

/*if(process.argv.length<=2){
    console.log("usage :"+__filename+"path/to");
    process.exit(-1);
    }
    var dirName = process.argv[2];
 
    fs.readdir(dirName, function(err, items) {
        console.log(items);
    if(err)
    {
        console.log("error");
    }
    else{
      for(var i=0;i<items.length;i++){
          var p = path.join(dirName , items[i]);
          var x=fs.statSync(p);
           if(x.isDirectory()){
            console.log("Directory");
           }
           if(x.isFile()){
            console.log("Regular file");
           }
        }
       } 
   });*/
  
  
  
  
