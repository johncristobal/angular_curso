import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private service: AuthService, private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.service.renewToken()
    .pipe(
      tap( valid => {
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
  
  canLoad(): Observable<boolean> | boolean {
    return this.service.renewToken()
    .pipe(
      tap( valid => {
        if(!valid){
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
}
