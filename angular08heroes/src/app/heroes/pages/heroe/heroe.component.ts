import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private route: ActivatedRoute,
    private routeBack: Router, 
    private service: HeroesService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(val => this.service.getHeroeId(val['id'])),
      )
      .subscribe( heroe => {
        this.heroe = heroe;
        }
      );
  }

  regresar(){
    this.routeBack.navigate(['/heroes/listado']);
  }
}
