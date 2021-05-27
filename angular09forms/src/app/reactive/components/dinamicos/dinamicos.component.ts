import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miForm: FormGroup = this.builder.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favoritos: this.builder.array([
        ['Spiderman', Validators.required],
        ['Venom', Validators.required]
      ], Validators.required )
  })

  get favoritosArr(){
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string){
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  guardar(){
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched(); //se llaman todos como tocacos y con eso se ejecuta el errors
      return;
    }

    this.miForm.reset();
  }

}
