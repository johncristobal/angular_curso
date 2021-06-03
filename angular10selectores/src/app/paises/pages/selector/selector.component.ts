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
  });

  regiones: string[] = [];
  paises: PaisData[] = [];

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
        }),
        switchMap( region => this.service.getPaisesRegion( region ))
      )
      .subscribe(paises => {
        this.paises = paises;
      })
  }

  llenarRgiones(){
    this.regiones = this.service.regiones;
  }

  guardar(){

  }

}
