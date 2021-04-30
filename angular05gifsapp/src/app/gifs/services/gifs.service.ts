import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchsGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' // este servicio sera uncio y global
})
export class GifsService {

  private _historial: string[] = [];
  private apikey = '0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR';
  private serviceUrl = "https://api.giphy.com/v1/gifs";

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    }

    if(localStorage.getItem('resultados')){
      this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
    }
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);
      

    this.http.get<SearchsGifsResponse>(
      `${this.serviceUrl}/search`,
      { params }  // {params:params}
    ).subscribe( (resp: SearchsGifsResponse ) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });
  }
}
