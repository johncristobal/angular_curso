import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Spiderman';
    edad: number = 45;

    get nombreCapitalizado ():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `
            ${this.nombre} - ${this.edad}
        `;
    }

    cambiarNombre(): void{
        this.nombre = 'Venom';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}