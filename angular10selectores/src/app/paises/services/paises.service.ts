import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FronteraData, PaisData } from '../interfaces/paises.interface';

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

  getFronteraCode(code: string): Observable<FronteraData | null>{
    if(!code){
      return of(null);
    }
    const url : string = `${this._baseUrl}/alpha/${ code }`
    return this.http.get<FronteraData>(url);
  }

  constructor(private http: HttpClient) { }
}
