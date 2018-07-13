import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  contactMethods=["Email","phone"];
  constructor() { }
 /* submit(f){
    console.log(f);
    if(f.valid){
    alert("Submitted Successfully");
    }
    else{
      alert("Fill the form completely");
    }
  }*/

  ngOnInit() {
  }

}
