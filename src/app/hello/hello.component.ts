import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  //we are getting the name as input from
  //the parent component here (app.component)
  @Input() helloName: string;
}