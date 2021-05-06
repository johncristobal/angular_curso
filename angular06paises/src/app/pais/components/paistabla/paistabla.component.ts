import { Component, Input } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paistabla',
  templateUrl: './paistabla.component.html',
  styles: [
  ]
})
export class PaistablaComponent {

  @Input() paises: Paises[] = [];
  
  constructor() { }

}
