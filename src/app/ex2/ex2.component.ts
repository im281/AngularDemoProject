import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex2-parent',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  currentCounter
  
  constructor() { }

  ngOnInit() {
  }
 
  handleChildButtonClick(value) {
    this.currentCounter = value
  }

}
