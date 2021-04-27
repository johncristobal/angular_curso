import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input('data') personajes: Personaje[] = [];
  get personajes(){
    return this.DbzService.personajes;
  }
  
  // inyeccion de dependencias
  constructor(private DbzService: DbzService){
    
  }
  
}
