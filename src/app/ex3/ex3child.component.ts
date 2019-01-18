import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ex3-child',
  templateUrl: './ex3child.component.html',
  styleUrls: ['./ex3child.component.css']
})
export class Ex3childComponent implements OnInit {

  constructor() { }

  private stopped = false
  private counter = 0
  private intervalId
  
  ngOnInit() {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }
  
  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }

}
