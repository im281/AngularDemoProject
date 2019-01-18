import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'ex1-child',
  templateUrl: './ex1child.component.html',
  styleUrls: ['./ex1child.component.css']
})
export class Ex1childComponent implements OnInit {
  @Input() address
  constructor() { }

  ngOnInit() {
  }

}
