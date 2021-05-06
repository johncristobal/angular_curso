import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paises } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = "https://restcountries.eu/rest/v2"

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Paises[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Paises[]>( url );
      // .pipe(
      //   catchError(err => of(['Hi error']))        
      // );
  }

  buscarCapital(termino: string): Observable<Paises[]>{
    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Paises[]>( url );
  }
}
