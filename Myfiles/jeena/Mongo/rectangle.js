function calcArea(l,b)
{
    var area=l*b;
    return area;
}
function calcPerimeter(l,b)
{
    var peri=2*(l+b);
    return peri;
}
module.exports.calcArea=calcArea;
module.exports.calcPerimeter=calcPerimeter;