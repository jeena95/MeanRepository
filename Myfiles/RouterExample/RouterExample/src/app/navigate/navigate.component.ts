import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent  {
  router:Router;
  constructor(router:Router) { 
    this.router=router;
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goLogin(){
    this.router.navigate(['login']);
  }
  goAbout(){
    this.router.navigate(['about']);
  }
  getRectangle(){
    this.router.navigate(['rectangle']);
  }
  
}
