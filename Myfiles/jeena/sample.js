//console.log("hello");

//setTimeout(add,5000,3,4)
//function add(a,b){
//console.log(a*b);
//}

//var sum=0;

//for(var i=2;i<process.argv.length;i++)
//{
//sum +=parseInt(process.argv[i]);
//}
///console.log("sum ="+sum);

function factorial(n){

	var fact=1;
    for(var i=1;i<=n;i++){
	
    fact *=i;
	}
    return fact;
  }

  function power(a,b){
    var result=1;
    for(var i=1;i<=b;i++){
     result*=a;
   }
   return result;
 }
  module.exports.factorial=factorial;
  module.exports.findpower=power;