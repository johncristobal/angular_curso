import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  activa: string = '';
  paises: Paises[] = [];
  errorExist: boolean = false;


  activarRegion(reg: string){
    this.activa = reg;
    this.paises = [];

    this.service.buscarRegion(reg)
    .subscribe( (resp) => {
      console.log(resp);
      this.paises = resp;

    }, (error) => {
      this.errorExist = true;
      this.paises = [];
    });
  }

  getClaseCSS(region: string){
    return (region === this.activa) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  constructor(private service: PaisService) { }

  ngOnInit(): void {
  }

}
