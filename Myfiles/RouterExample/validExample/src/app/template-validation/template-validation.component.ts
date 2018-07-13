import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.css']
})
export class TemplateValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(f){
    console.log(f);
    if(f.valid){
    alert("Login Successfully");
    }
    else{
      alert("invalid login");
    }
  }

}
