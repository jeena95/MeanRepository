import { Component, OnInit } from '@angular/core';
import{RectangleService} from '../rectangle.service';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
  providers:[RectangleService]
})

export class RectangleComponent implements OnInit {
 length:number;
 breadth:number;
 area:number;
 perimeter:number;
 rectangle:RectangleService;
  constructor(rectangle:RectangleService) {
    this.rectangle=rectangle;
   }
   calculateArea(){
     this.area=this.rectangle.calculateArea(this.length,this.breadth)
     return this.area;
   }
   calculatePerimeter(){
    this.perimeter=this.rectangle.calculatePerimeter(this.length,this.breadth)
    return this.perimeter;
  }

  ngOnInit() {
  }

}
