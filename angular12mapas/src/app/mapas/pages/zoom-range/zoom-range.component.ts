import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%;
    }

    .row{
      background-color: white;
      position: fixed;
      bottom: 50px;
      width: 400px;
      left: 50px;
      padding: 10px;
      border-radius: 5px;
      z-index:999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa!: ElementRef;

  zoomLevel: number = 10;
  center: [number, number] = [ -99.15493134593737, 19.412416616140234 ];

  constructor() { }

  ngAfterViewInit(): void {
      
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      //container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      const zoomActual = this.mapa.getZoom();
      this.zoomLevel = zoomActual;
    });

    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (ev) => {
      const {lng, lat} = ev.target.getCenter();
      this.center = [lng, lat];
    });

  }

  zoomIn(){
    this.mapa.zoomIn();
  } 

  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomCambio(value: string){
    this.mapa.zoomTo(Number(value));
  }

  ngOnDestroy(): void {

    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }
}
