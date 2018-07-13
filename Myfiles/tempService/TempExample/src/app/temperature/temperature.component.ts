import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
 
})
export class TemperatureComponent implements OnInit {
  value:number;
  celsius:number;
  fahrenheit:number;
  temperature:TemperatureService;
  constructor(temperature:TemperatureService) {
  this.temperature=temperature;
   }
 
   calcCelsius(){
     this.celsius=this.temperature.calcCelsius(this.value);
     return this. celsius;
   }
   getFahrenheit(){
    this.fahrenheit=this.temperature.getFahrenheit(this.value);
    return this.fahrenheit;
  }
  ngOnInit() {
  }

}
