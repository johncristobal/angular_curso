import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX Vas'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0),
  // });

  miForm: FormGroup = this.builder.group({
      nombre: [
        , 
        [
           Validators.required,
           Validators.minLength(3)
        ]
      ],
      precio: [
        , 
        [
          Validators.required,
          Validators.min(0)
        ]
      ],
      existencias: [
        ,
        [
          Validators.required,
          Validators.min(0)
        ]
      ],
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'spiderman',
      precio: 1000,
    })
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
