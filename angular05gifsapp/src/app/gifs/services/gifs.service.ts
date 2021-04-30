import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchsGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' // este servicio sera uncio y global
})
export class GifsService {

  private _historial: string[] = [];
  private apikey = '0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR';

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    }
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchsGifsResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR&q=${query}&limit=10`
    ).subscribe( (resp: SearchsGifsResponse ) => {
      this.resultados = resp.data;
    });
  }
}
