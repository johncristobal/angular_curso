import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miForm: FormGroup = this.builder.group({
    genero: [
      'M',
      Validators.required
    ],
    noti: [
      true
    ],
    terminos: [
      false, Validators.requiredTrue
    ]
  });

  persona = {
    genero: 'F',
    noti: true
  };

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset( {
      ...this.persona,
      terminos: true
    });

    this.miForm.valueChanges.subscribe( form => {
      console.log(form);
      delete form.terminos;
      this.persona = form;
    });
    
    // this.miForm.get("terminos")?.valueChanges.subscribe( value => {
    //   console.log(value);
    // });
  }

  guardar(){
    const data = {...this.miForm.value};
    delete data.terminos;

    this.persona = data;
  }
}
