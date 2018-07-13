class Rectangle
{
	constructor(length,breadth)
	{
	this.length=length;
	this.breadth=breadth;
	}
    calculateArea()
	{
	return this.length*this.breadth;
    }
    perimeter()
    {
    return 2*(this.length+this.breadth);   
    }
}
   //module.exports.calculateArea=calculateArea;
   //module.exports.perimeter=perimeter;
   module.exports.Rectangle=Rectangle;
