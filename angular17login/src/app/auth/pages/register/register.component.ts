import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miForm: FormGroup = this.builder.group({
    name: ["testa", Validators.required],
    email: ["test1@gmail.com", [Validators.required, Validators.email]],
    password: ["123456", [Validators.required, Validators.minLength(6)]],
  });

  constructor( 
    private builder: FormBuilder,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.miForm.value); 
    this.router.navigateByUrl("/dashboard");
  }

}
