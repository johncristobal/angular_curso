import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

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
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.miForm.value); 
    const {name, email, password} = this.miForm.value;
    this.service.registro(name, email,password)
    .subscribe(resp => {

      if(resp === true){
        this.router.navigateByUrl("/dashboard");
      }else{
        Swal.fire('Error', resp, 'error');
      }
    });
  }

}
