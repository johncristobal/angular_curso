import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // este servicio sera uncio y global
})
export class GifsService {

  private _historial: string[] = [];
  private apikey = '0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR';

  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){

  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR&q=${query}&limit=10`
    ).subscribe( (resp:any) => {
      this.resultados = resp.data;
    });
  }
}
