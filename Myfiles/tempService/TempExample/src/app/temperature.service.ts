import {Injectable} from '@angular/core';
@Injectable()
export class TemperatureService
{
calcCelsius(value:number){
   
        var temp=value;
        var celsius= (temp - 32)*.5556;
        return celsius;
    }
    getFahrenheit(value:number){
   
        var temp=value;
        var fahren= temp * 1.8 + 32;
        return fahren;
    }

}
   
