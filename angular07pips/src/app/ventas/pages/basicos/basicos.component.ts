import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombrelower : string = 'alex';
  nombreupper : string = 'aLEx';
  nombrecomplete : string = 'alEX CristBAL';

  fecha: Date = new Date();

  constructor() { }

}
