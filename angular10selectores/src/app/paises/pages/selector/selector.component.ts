import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styles: [
  ]
})
export class SelectorComponent implements OnInit {

  miForm: FormGroup = this.builder.group({
    region: ['', Validators.required ],
    pais: ['', Validators.required ],
    frontera: ['', Validators.required ],
  });

  regiones: string[] = [];
  paises: PaisData[] = [];
  fronteras: string[] = [];

  cargando: boolean = false;

  constructor(
    private builder: FormBuilder,
    private service: PaisesService
  ) { }

  ngOnInit(): void {
    this.llenarRgiones();

    // this.miForm.get('region')?.valueChanges.subscribe(region => {
    //   this.service.getPaisesRegion(region).subscribe(paises => {
    //     this.paises = paises;
    //   })
    // });

    this.miForm.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.miForm.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.service.getPaisesRegion( region ))
      )
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      })

    this.miForm.get('pais')?.valueChanges
      .pipe(
        tap( ( _ ) => {
          this.fronteras = [];
          this.cargando = true;
          this.miForm.get('frontera')?.reset('');
        }),
        switchMap( codigo => this.service.getFronteraCode(codigo) )
      )
      .subscribe(data => {
        this.fronteras = data?.borders || [];
        this.cargando = false;
      });
  }

  llenarRgiones(){
    this.regiones = this.service.regiones;
  }

  guardar(){

  }

}
