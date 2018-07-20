import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sample5',
  templateUrl: './sample5.component.html',
  styleUrls: ['./sample5.component.css']
})
export class Sample5Component implements OnInit {
http:HttpClient;
  constructor(http:HttpClient) 
  {this.http=http;
  this.http.get({this.url,}) }

  ngOnInit() {
  }

}
