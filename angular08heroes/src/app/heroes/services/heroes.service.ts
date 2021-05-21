import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseurl : string = environment.baseurl;

  constructor( private http: HttpClient) { }

  getHeroes() : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.baseurl+"/heroes");
  }

  getHeroeId(id: string){
    return this.http.get<Heroe>(this.baseurl+"/heroes/"+id);
  }

  getHeroeQuery(termino: string){
    return this.http.get<Heroe[]>(`${this.baseurl}/heroes?q=${termino}&_limit=6`);
  }

  saveHeroe(heroe: Heroe) : Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseurl}/heroes`, heroe);
  }

  updateHeroe(heroe: Heroe) : Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseurl}/heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: string) : Observable<Heroe> {
    return this.http.delete<Heroe>(`${this.baseurl}/heroes/${id}`);
  }
}
 