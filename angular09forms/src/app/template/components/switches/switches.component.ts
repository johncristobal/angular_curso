import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    noti: false,
  }

  terminos = false;

  constructor() { }

  ngOnInit(): void {
  }

}
