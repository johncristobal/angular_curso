import { Component } from '@angular/core';
import { GifsModule } from 'src/app/gifs/gifs.module';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }
  
  constructor( private gifsService: GifsService) {

  }

  buscar(termino: string){
    console.log(termino);
    this.gifsService.buscarGifs(termino);
  }
}
