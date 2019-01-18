import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex1childComponent } from './ex1/ex1child.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex2childComponent } from './ex2/ex2child.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex3childComponent } from './ex3/ex3child.component';



@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: 'ex1', component: Ex1Component },
      { path: 'ex2', component: Ex2Component },
      { path: 'ex3', component: Ex3Component },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [ AppComponent, HomeComponent, HelloComponent,Ex1Component, Ex1childComponent, Ex2Component, Ex2childComponent, Ex3Component, Ex3childComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }