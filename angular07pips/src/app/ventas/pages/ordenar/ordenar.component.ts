import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})



export class OrdenarComponent  {

  enMayus: boolean = true;
  heroes: Heroe []= [
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Venom',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Carnage',
      vuela: false,
      color: Color.rojo
    },
  ]

  cambiarMayus(){
    this.enMayus = !this.enMayus;
  }

  ordenarPor: string = '';

  cambiarOrden(v:string){
    this.ordenarPor = v;
  }

}
