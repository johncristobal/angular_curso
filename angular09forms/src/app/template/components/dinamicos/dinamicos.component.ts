import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Alex',
    favoritos: [
      {
        id: 1,
        nombre: 'Spiderman'
      },
      {
        id: 2,
        nombre: 'Venom'
      },
    ]
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregar(){
    const nuevo: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevo});

    this.nuevoJuego = '';
  }

  guardar(){
    
  }
}
