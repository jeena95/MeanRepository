import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TempConvComponent } from './temp-conv/temp-conv.component';
import { Sample5Component } from './sample5/sample5.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TempConvComponent,
    Sample5Component
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
