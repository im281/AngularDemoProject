import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Welcome';
  appName = 'Angular';

  constructor() { }

  ngOnInit() {
  }

}
