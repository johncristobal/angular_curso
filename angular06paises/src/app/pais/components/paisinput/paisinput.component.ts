import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paisinput',
  templateUrl: './paisinput.component.html',
  styles: [
  ]
})
export class PaisinputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  //cuando deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string= "";

  @Input() placeholder: string = "";

  buscar(){
    this.onEnter.emit(this.termino);
  }

  tecla(event: any){
    const valor = event.target.value;
    this.debouncer.next(this.termino);
  }

  constructor() { }

  //Se dispara una vez cuando es creado
  ngOnInit(){
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( (valor) => {
        console.log(valor);
        this.onDebounce.emit(valor);
    });
  }
}
