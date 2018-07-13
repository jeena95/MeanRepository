class Point
{
	constructor(x,y)
	{
	this.x=x;
	this.y=y;
	}
  calculateDistance(p)
	{
		
		var d=Math.sqrt((this.x-p.x)*(this.x-p.x)+(this.y-p.y)*(this.y-p.y));
		return d;
	
	}
	
}