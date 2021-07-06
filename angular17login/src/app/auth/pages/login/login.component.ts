import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miForm: FormGroup = this.builder.group({
    email: ["test1@gmail.com", [Validators.required, Validators.email] ],
    password: ["123456", [Validators.required, Validators.minLength(6)] ],
  });

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService
    ) { }

  login(){
    const {email, password} = this.miForm.value;
    this.service.login(email,password)
    .subscribe(resp => {
      if(resp){
        this.router.navigateByUrl("/dashboard");
      }else{
        //TODO mensaje error
      }
    });
  }
}
