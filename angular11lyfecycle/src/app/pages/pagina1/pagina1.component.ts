import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit,
  OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
{

  constructor() { 
    //este se lanza primero
    //antes del html
    console.log('Constructor');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timeS.unsubscribe();
  }

  timeS!: Subscription;

  // Hook - gancho
  // se lanza de forma automatica
  ngOnInit(): void {
    //aqui ya tenemosel html
    //peticinoes http
    console.log('ngOnInit');
    this.timeS = interval(1000).subscribe()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }
}
