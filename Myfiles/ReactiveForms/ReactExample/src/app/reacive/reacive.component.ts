import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-reacive',
  templateUrl: './reacive.component.html',
  styleUrls: ['./reacive.component.css']
})
export class ReaciveComponent implements OnInit {
  loginForm=new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('abc',[Validators.required]),
      url:new FormControl('',[Validators.required,this.validateUrl])
    }
  )
  constructor() { }

  ngOnInit() {
  }
  validateUrl(control:AbstractControl){
    if(!control.value.startsWith('https')||
     !control.value.includes('.io')){
    return {inValidUrl:true};
   }
  else
   return null;
}
  send(){
    if(this.loginForm.valid){
      alert("valid");
      console.log("submitted");
    }
    
  }

}
