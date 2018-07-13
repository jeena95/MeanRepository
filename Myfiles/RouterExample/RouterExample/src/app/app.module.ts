import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NavigateComponent } from './navigate/navigate.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import {FormsModule} from '@angular/forms';
import { SetExampleComponent } from './set-example/set-example.component'
const routes :Routes=[
                {path:'about',component:AboutComponent},
                {path:'home',component:HomeComponent},
                {path:'login',component: LoginComponent},
                {path:'rectangle',component:RectangleComponent},
                {path:'**',component:ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    NavigateComponent,
    RectangleComponent,
    SetExampleComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
