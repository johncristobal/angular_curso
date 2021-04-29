import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // este servicio sera uncio y global
})
export class GifsService {

  private _historial: string[] = [];
  private apikey = '0Guxt7sN00kUM97FB4uRrKqH8IAjyOdR';


  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    console.log(this._historial);
  }
}
