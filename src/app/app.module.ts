import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Ex1Component } from './ex1/ex1.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent, Ex1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
