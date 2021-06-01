import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  rutas: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './template/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    },
  ]

  rutasR: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './reactive/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './reactive/switches'
    },
  ]

  rutasAuth: MenuItem[] = [
    {
      text: 'Registro',
      ruta: './auth/registro'
    },
    {
      text: 'Login',
      ruta: './auth/login'
    },
  ]
}
