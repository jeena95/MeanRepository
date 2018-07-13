function find(num)
{
	var sum=0;
	var s=0;
	var n=0;
  while(num>0)
  {
    s=num%10;
  	n=(s*s*s);
  	sum=sum+n;
  	num=Math.floor(num/10);
  }
  return sum;
      
} 

function Armstrong()
{
  var num=document.getElementById("n").value;
 
  var res=find(num);
   
  if(res==num)
  {
  document.getElementById("arm").value="yes";
  }
  else
  {
  document.getElementById("arm").value="no";
  }
}