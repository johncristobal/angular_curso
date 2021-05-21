import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

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

  login() : Observable<Auth>{
    return this.http.get<Auth>(this.baseurl+"/usuarios/1")
    .pipe(
      tap(auth => this._auth = auth)
    );
  }
}
