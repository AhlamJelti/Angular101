import { Component } from "@angular/core";
import { Passenger } from '../assets/passengers';
import { passengers } from '../assets/passengers';

@Component({
  selector: 'sqli',
  templateUrl: './app.component.html',

})

export class AppComponent {
  passengers = passengers;
  constructor() { }
}
