 function findFactorial(num)
    {
      var n=1;
      var fact=1;
      while(n<=num)
      {
        fact=fact*n;
        n++;
      }
      return fact;
     } 
function computeFactorial()
{
  var n=document.getElementById("n").value;
  var res=findFactorial(n);
  document.getElementById("fact1").value=res;
}