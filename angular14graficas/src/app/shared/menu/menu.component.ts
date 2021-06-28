import { Component, OnInit } from '@angular/core';

interface menuItem {
  rute: String;
  texto: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  menu: menuItem[] = [
    { rute: '/grafica/barra', texto: 'Barras' },
    { rute: '/grafica/barra-doble', texto: 'Barras dobles' },
    { rute: '/grafica/dona', texto: 'Dona' },
    { rute: '/grafica/dona-http', texto: 'Dona htpp' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
