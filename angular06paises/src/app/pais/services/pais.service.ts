import { HttpClient, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paises } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = "https://restcountries.eu/rest/v2"

  get paramsData(){
    return new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Paises[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Paises[]>( url, {params: this.paramsData} );
      // .pipe(
      //   catchError(err => of(['Hi error']))        
      // );
  }

  buscarCapital(termino: string): Observable<Paises[]>{
    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Paises[]>( url, {params: this.paramsData}  );
  }

  buscarPaisPorId(id: string): Observable<Paises>{
    const url = `${this.api_url}/alpha/${id}`;
    return this.http.get<Paises>( url );
  }

  buscarRegion(region: string): Observable<Paises[]>{
    const url = `${this.api_url}/region/${region}`;
    return this.http.get<Paises[]>( url, {params: this.paramsData} );
  }
}
