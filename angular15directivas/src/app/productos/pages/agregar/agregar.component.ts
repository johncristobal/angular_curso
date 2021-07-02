import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  text : string = "Hola 1";
  color: string = 'red';

  miForm: FormGroup = this.builder.group({
    nombre: ['',Validators.required]
  });

  errores(campo: string): boolean{
    return this.miForm.get(campo)?.invalid || false;
  }

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  cambiarText(){
    this.text = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
