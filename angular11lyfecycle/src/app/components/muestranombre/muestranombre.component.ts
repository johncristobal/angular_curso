import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestranombre',
  templateUrl: './muestranombre.component.html',
  styles: [
  ]
})
export class MuestranombreComponent implements OnInit {

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
