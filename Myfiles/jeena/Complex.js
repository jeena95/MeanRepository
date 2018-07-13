class Complex
{
	constructor(real,img)
	{
	this.real=real;
	this.img=img;
	}
   calculateSum(c)
	{
		var result=new Complex(0,0);
		result.real=this.real+c.real;
		result.img=this.img+c.img;
		return result;
	
	}
	
}