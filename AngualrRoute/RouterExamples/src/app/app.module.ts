import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule } from '@angular/forms';
import { SetComponent } from './set/set.component';

const routes:Routes=[{path:'about',component:AboutComponent},
{path:'about',component:AboutComponent},
{path:'home',component:HomeComponent },
{path:'support',component:SupportComponent },
{path:'rectangle',component:RectangleComponent },
{path:'**',component:PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SupportComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    RectangleComponent,
    SetComponent,
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
