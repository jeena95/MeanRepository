import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
 http:HttpClient;
 url="http://127.0.0.1:3001/Int";
  constructor(http:HttpClient) {
    this.http=http;
    this.http.get(this.url,{responseType:'text'})
    .subscribe(response=>{
      console.log("Response="+response);
      alert(response.toString());
    },(error)=>{
      alert("error");
    })
   }

  ngOnInit() {
  }

}
