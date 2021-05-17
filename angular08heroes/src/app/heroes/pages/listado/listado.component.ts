import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    
  ]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private service: HeroesService) { }

  ngOnInit(): void {
    this.service.getHeroes()
    .subscribe(resp => {
      this.heroes = resp;
    });
  }

}
