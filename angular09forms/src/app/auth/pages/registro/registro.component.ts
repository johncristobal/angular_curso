import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { nombrePattern, emailPattern, noStrider } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

export class RegistroComponent implements OnInit {

  miForm: FormGroup = this.builder.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombrePattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailV ] ],
    username: ['', [ Validators.required, this.validatorService.noStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    confirm: ['', [ Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password','confirm') ]
  });

  get emailErrorMsg() : string {
    const errors = this.miForm.get('email')?.errors;
    if(errors?.required){
      return 'Email obligatorio';
    } else if (errors?.pattern){
      return 'Formato invalido';
    }else if (errors?.emailTomado){
      return 'Email ya existe';
    }

    return '';
  }

  campoNoValido(campo: string){
    return this.miForm.get(campo)?.invalid
      && this.miForm.get(campo)?.touched; 
  }

  submitForm(){
    this.miForm.markAllAsTouched();
  }

  constructor(
    private builder: FormBuilder,
    private validatorService: ValidatorService,
    private emailV: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Alex Cris',
      email: 'john@gmail.com',
      username: 'blabla'
    })
  }

}
