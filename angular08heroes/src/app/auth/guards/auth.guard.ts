import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authService.verificaAuth()
      .pipe(
        tap( isAuth => {
          if(!isAuth){
            this.router.navigate(['./auth/login']);
          }
        })
      )
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ){
  }

  // para prevenir que el usuario cargue un modulo
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authService.verificaAuth()
      .pipe(
        tap( isAuth => {
          if(!isAuth){
            this.router.navigate(['./auth/login']);
          }
        })
      )
  }
}
