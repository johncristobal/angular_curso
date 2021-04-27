import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 20000
        },
        {
            nombre: 'Vegeta',
            poder: 19000
        },
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor(){
    }

    agregarPersonaje(p: Personaje){
        this._personajes.push(p);
    }

}
