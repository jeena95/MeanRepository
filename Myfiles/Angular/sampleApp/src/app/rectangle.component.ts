import {Component} from '@angular/core';

@Component({
    selector:'rectangle',
    templateUrl:'./rectangle.component.html',
    styleUrls:['./rectangle.component.css']
})

export class Rectangle{
   /* length:number;
    breadth:number;
    area:number;
    calculateArea(){
        this.area= this.length*this.breadth;
        return this.area;
    }
    calculatePerimeter(){
        return 2*(this.breadth+this.length);
    }*/
  /*  item;
    items:any=[];
    addItem(){
        this.items.push(this.item);
    }
    delete(index){
        this.items.splice(index,1) 
    }*/
    
    students={
        name:"jeena",
        subjects:[{name:"java",mark:70},{name:".net",mark:65}],
        
     total(){
        let sum:number=0;
         for (let i:number =0; i <this.subjects.length; i++) {
             sum=sum+this.subjects[i].mark;
         }
         return sum;
     },
     average(){
        return this.total()/this.subjects.length;
    }
}
    
   
