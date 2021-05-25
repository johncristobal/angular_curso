import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.miForm.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean{
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miForm?.controls.precio?.value < 0 && this.miForm?.controls.precio?.touched;
  }

}
