import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container{
        margin: 10px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  get auth(): Auth{
    return this.service.auth;
  }

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/auth']);
  }

}
