import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Paises } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Paises;

  constructor( private activeRoute: ActivatedRoute, private servive: PaisService) { }

  ngOnInit(): void {

    this.activeRoute.params
      .pipe(
        switchMap( (params) => this.servive.buscarPaisPorId(params.id)),
        tap( console.log )
      )
      .subscribe( resp => {
        this.pais = resp;
      });

    // this.activeRoute.params
    //   .subscribe( (params) => {
    //     this.servive.buscarPaisPorId(params.id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });
    //   })
  }
}
