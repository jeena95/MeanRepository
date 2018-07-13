import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-temp-conv',
  templateUrl: './temp-conv.component.html',
  styleUrls: ['./temp-conv.component.css']
})
export class TempConvComponent implements OnInit {
  celsius:string;
  http:HttpClient;
  url="http://127.0.0.1:3001/";
   constructor(http:HttpClient) {
     this.http=http;
   }
   submit(f:any){
     let data=JSON.stringify(f.value);
     this.http.post(this.url,data)
     .subscribe(res=>{
      alert("success");
       console.log("Response=",res);
       this.celsius=res.toString();
     },(error)=>{
       alert("error");
     })
    
    }
  ngOnInit() {
  }

}
