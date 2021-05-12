import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Alex';
  genero: string = 'masculino';
  invitaionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  clientes: string[] = ['Maria','Pedro','Jose','Bere']
  clienteMap = {
    '=0':'no tenemos clientes esperando',
    '=1':'tenemos 1 cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando..'
  }

  constructor() { }

  cambiarCliente(){
    if (this.genero == 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Alexa';
    }else{
      this.genero = 'masculino';
      this.nombre = 'Alex';
    } 
  }

  borrarCliente(){
    this.clientes.shift();
  }

  // keyvalue pipe
  persona = {
    nombre: 'Alex',
    edad: 29,
    direccion: 'doctores, marquex 58'
  }

  //async pipe
  miobs = interval(1000);
  prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa prueba')
    }, 3500)
  });

}
