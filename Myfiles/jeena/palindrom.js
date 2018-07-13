function fact()
{
	var a,b,temp=0;

	var res=document.getElementById("n").value;
	b=res;
while(res>0)
{
a=res%10;
res=parseInt(res/10);
temp=temp*10+a;
}

alert(temp)
if(temp==b)
{
alert("yes!!! its a palimdrom");
	
}
else
{
	alert("no!!! its not a palimdrom");
}
}
