import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius: 8px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC-comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel-comics'
    },
  ]

  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: '',
  }

  constructor(
    private service: HeroesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private routeData: ActivatedRoute) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.routeData.params
    .pipe(
      switchMap( ({id}) => this.service.getHeroeId(id))
    )
    .subscribe( (heroe) => {
      this.heroe = heroe
    })
  }

  guardarData(){
    if(this.heroe.superhero.trim().length == 0){
      return;
    }

    if(this.heroe.id) {
      //actualizar
      this.service.updateHeroe(this.heroe)
      .subscribe( heroe => {
        this.mostrarSnack('Registro actualizado');
      });
    }else{

      this.service.saveHeroe(this.heroe)
      .subscribe( resp => {
        this.mostrarSnack('Registro creado');
        this.router.navigate(['/heroes/editar', resp.id]);
      });
    }
  }

  borrarHeroe(){
    
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '550px',
      data: this.heroe
    });

    dialog.afterClosed()
    .subscribe(res => {
      if(res){
        this.service.deleteHeroe(this.heroe.id!)
        .subscribe(resp => {
        this.router.navigate(['/heroes']);
      });
      }
    });


  }

  mostrarSnack( msg: string ){
    this._snackBar.open(msg, 'Cerrar', {
      duration: 2000
    })
  }
}
