import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Venon','thor'];
  eliminado: string = "";

  borrarHeroe(){
    const deleted = this.heroes.shift();
    console.log(deleted);
    this.eliminado = deleted || '';
  }
}
