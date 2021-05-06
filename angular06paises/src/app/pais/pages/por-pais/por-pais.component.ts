import { Component } from '@angular/core';
import { Paises } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  errorExist: boolean = false;
  paises: Paises[] = [];

  buscar( termino: string ){
    this.errorExist = false;
    this.termino = termino;

    this.service.buscarPais(this.termino)
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
