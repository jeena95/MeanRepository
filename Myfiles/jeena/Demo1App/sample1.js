const _ =require("underscore");
var a=[10,20,30];
var result=_.min(a);
//console.log(result);
var res=_.max(a);
//console.log(res);
var b=[10,20,200,170,23,45,67];
var n=b.length;
var c=[];
var i=0;
while(n>=0)
{
    if(b[n]>100)
    {
         c[i]=b[n];
         i++;
         // or/////n.push(c[i]);
    }
    n--;
  
}
//console.log(c);
var results=_.filter(b,function (item) {return item>100});
//console.log(results);

var odd=_.filter(b,function (item) {if(item%2!=0) return item });
//console.log(odd);
var even=_.filter(b,function (item) {if(item%2==0) return item });
//console.log(even);
var res1=_.reject(b,function (item){return item>100})
//console.log(res1);
var sortlist=_.sortBy(b);
console.log(sortlist);
var size=_.size(b);
console.log(size);

var x=_.shuffle(b);
console.log(x);


