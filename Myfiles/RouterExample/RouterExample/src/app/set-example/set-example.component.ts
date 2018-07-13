import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-example',
  templateUrl: './set-example.component.html',
  styleUrls: ['./set-example.component.css']
})
export class SetExampleComponent  {
fruits=new Set();
  constructor() { 

  this.fruits.add('APPLE');
  this.fruits.add('ORANGRE');
  this.fruits.add('MANGO');

  }
  contains(fruit):boolean{
    if(this.fruits.has(fruit)){
      return true;
    }else{
      return false;
    }
  }
size():number{
  return this.fruits.size;
}
delete(fruit){
  if(this.fruits.has(fruit)){
    this.fruits.delete(fruit);
  }
}
add(fruit)
{
  this.fruits.add(fruit);
}
}
