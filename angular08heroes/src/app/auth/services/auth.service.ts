import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  get auth() : Auth {
    return { ...this._auth! };
  }

  private baseurl : string = environment.baseurl;

  constructor(
    private http: HttpClient
  ) { }

  verificaAuth() : Observable<boolean> {
    if(!localStorage.getItem('id')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseurl}/usuarios/1`)
    .pipe(
      map(auth => {
        this._auth = auth;
        return true;
      })
    );
  }

  login() : Observable<Auth>{
    return this.http.get<Auth>(this.baseurl+"/usuarios/1")
    .pipe(
      tap(auth => this._auth = auth),
      tap(auth => localStorage.setItem('id',auth.id))
    );
  }

  logout(){
    this._auth = undefined;
    //localStorage.setItem('id',undefined);
  }
}
