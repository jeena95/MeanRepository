
function getCelsius(a){
    var temp=a;
    var value= (temp - 32)*.5556;
    return value;
}
function getFahrenheit(a){
    var temp=a;
    var value= temp * 1.8 + 32;
    return value;
}
module.exports.getCelsius=getCelsius;
module.exports. getFahrenheit= getFahrenheit;