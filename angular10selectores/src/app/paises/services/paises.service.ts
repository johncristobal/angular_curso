import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisData } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  private _baseUrl: string = "https://restcountries.eu/rest/v2";

  get regiones(){
    return [...this._regiones];
  }

  getPaisesRegion(region: string): Observable<PaisData[]>{
    const url : string = `${this._baseUrl}/region/${ region }?fields=alpha3Code;name`
    return this.http.get<PaisData[]>(url);
  }

  constructor(private http: HttpClient) { }
}
