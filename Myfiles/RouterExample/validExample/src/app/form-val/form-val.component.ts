import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-val',
  templateUrl: './form-val.component.html',
  styleUrls: ['./form-val.component.css']
})
export class FormValComponent {

  constructor() { }
  submit(f){
    console.log(f);
    if(f.valid){
    alert("Submitted Successfully");
    }
    else{
      alert("Fill the form completely");
    }
  }
 
}
