import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelected!:Heroe | undefined;

  constructor(private service: HeroesService) { }

  ngOnInit(): void { 
  }

  buscando(){
    this.service.getHeroeQuery(this.termino.trim())
    .subscribe(h => {
      this.heroes = h;
    })
  }

  seleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSelected = undefined;
      return;
    }

    const heroe : Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.service.getHeroeId(heroe.id!)
    .subscribe(hh => {
      this.heroeSelected = hh;
    })
  }
}
