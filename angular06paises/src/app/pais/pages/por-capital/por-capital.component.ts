import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  errorExist: boolean = false;
  paises: Paises[] = [];

  buscar( termino: string ){
    this.errorExist = false;
    this.termino = termino;

    this.service.buscarCapital(this.termino)
    .subscribe( (resp) => {
      console.log(resp);
      this.paises = resp;

    }, (error) => {
      this.errorExist = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    console.log("here");
    
  }

  constructor(private service: PaisService) { }

}
