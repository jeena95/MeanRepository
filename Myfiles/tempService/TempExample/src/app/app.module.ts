import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureService } from './temperature.service';
import { ReverseStringPipe } from './reverse.pipe';
import { SummaryPipe } from './summary.pipe';
import { orderByPipe } from './orderby.pipe';
import { NgIfComponent } from './ng-if.component';
import { NgSwitchComponent } from './ng-switch.component';
import { NgStyleComponent } from './ng-style.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    ReverseStringPipe,
    SummaryPipe,
    orderByPipe,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent
   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers:[TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
