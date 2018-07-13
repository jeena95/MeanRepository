import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { FormValComponent } from './form-val/form-val.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { NavComponent } from './nav/nav.component';
import {Routes,RouterModule} from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormGroupComponent } from './form-group/form-group.component';
const routes :Routes=[
  {path:'employee',component:EmployeeComponent},
  {path:'form-val',component:FormValComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TemplateValidationComponent,
    FormValComponent,
    EmployeeComponent,
    NavComponent,
    ReactiveFormComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
