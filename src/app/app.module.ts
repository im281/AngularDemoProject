import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: HomeComponent },
      { path: 'ex1', component: Ex1Component },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [ AppComponent, Ex1Component, HomeComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }