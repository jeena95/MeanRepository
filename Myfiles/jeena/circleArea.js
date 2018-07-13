function findArea(num)
{
  const pi=3.14;
  return(pi*num*num);
      
} 
function computeArea()
{
  var n=document.getElementById("n").value;
  var res=findArea(n);
  document.getElementById("area").value=res;
}