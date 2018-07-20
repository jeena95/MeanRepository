/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import {RecangleServices} from '../rectangle.services';
@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
  providers:[RecangleServices]
})
export class RectangleComponent implements OnInit {
  length:number;
  breadth:number;
  area:number;
  perim:number;
  rectangle:RecangleServices;

  constructor(rectangle:RecangleServices) {
    this.rectangle=rectangle
   }
   calucalteArea()
   {
     this.area=this.rectangle.calucalteArea(this.length,this.breadth)
    // return this.area;
   }
   calucaltePeimeter()
   {
     this.perim=this.rectangle. calucaltePeimeter(this.length,this.breadth)
    // return this.perim;
   }
  ngOnInit() {
  }

  }
