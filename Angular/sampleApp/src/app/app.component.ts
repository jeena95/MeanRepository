import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name='jeena';
  a:number=10;
  b:number=5;
  d='02/03/2018';
  arr:any=[10,20,30,35,37,45];
  add(){
    return this.a+this.b;
  }
  f1(){
    alert("Button clicked");
  }
  f2(e){
    alert(String.fromCharCode(e.keyCode));
  }
  f3(e){
    alert("X ="+e.clientX+"  Y ="+e.clientY);
  }
  factorial(n:number){
    let fact:number=1
   for(let i:number=1;i<=n;i++){
     fact *=i;
   }
   return fact;
  }

 employee=[{
  empId:"e101",
  empName:"jeena",
  basicPay:5000
},{
  empId:"e102",
  empName:"jose",
  basicPay:6000}]

persons=[{name:"jessy",age:53},{name:"jibin",age:27}];
}