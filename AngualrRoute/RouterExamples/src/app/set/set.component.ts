import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {
stu={name:"jiya",imgSrc:"C:\Users\Public\Pictures\Sample Pictures\Hydrangeas.jpg"}
  
fruits=new Set();
  constructor() { 
    this.fruits.add('apple')
    this.fruits.add('Strawbery')
    this.fruits.add('pineApple')
   

  }
  contains(friut):boolean
  {
    if(this.fruits.has(friut))
    {
      return true;

    }
    else
    {
      return false;
    }
  }
size():number{
  return this.fruits.size;  
}
delete(friut)
{
  if(this.fruits.has(friut))
  {
    this.fruits.delete(friut);
  }
}
add(friut)
{
  this.fruits.add(friut);
}
 
}
