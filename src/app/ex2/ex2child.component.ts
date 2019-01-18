import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ex2-child',
  templateUrl: './ex2child.component.html',
  styleUrls: ['./ex2child.component.css']
})
export class Ex2childComponent implements OnInit {

  constructor() { }

  @Output() buttonClick = new EventEmitter()
  counter = 0
  
  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }
  
  buttonClicked() {
    this.buttonClick.emit(this.counter)
  }
}
