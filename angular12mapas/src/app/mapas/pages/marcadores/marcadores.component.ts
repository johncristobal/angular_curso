import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkColor {
  color: string;
  marker?: mapboxgl.Marker,
  center?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%;
    }
    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  mapa!: mapboxgl.Map;
  @ViewChild('mapa') divMapa!: ElementRef;

  // array marker
  marcadores: MarkColor[] = [];

  zoomLevel: number = 15;
  center: [number, number] = [ -99.15493134593737, 19.412416616140234 ];

  ngAfterViewInit(): void {    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      //container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.leerLocalData();
    
    // const markerH : HTMLElement = document.createElement('div');
    // markerH.innerHTML = 'Hiii';

    // const marker = new mapboxgl.Marker({
    //   element: markerH
    // })
    // .setLngLat(this.center)
    // .addTo(this.mapa);
  }

  constructor() { }

  irMarcador( marker: mapboxgl.Marker ){
    this.mapa.flyTo({
      center: marker.getLngLat(),
      zoom: 17
    });
  }

  agregarM(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const mark = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat( this.center )
      .addTo(this.mapa);

    this.marcadores.push({
      color: color,
      marker: mark,
      center: this.center
    }); 

    this.guardarMarcadores();

    mark.on('dragend',()=> {
      this.guardarMarcadores();
    });
  }

  guardarMarcadores(){
    const arr: MarkColor[] = [];

    this.marcadores.forEach( m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      arr.push({
        color: color,
        center: [ lng, lat ]
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(arr));
  }

  leerLocalData(){
    if(!localStorage.getItem('marcadores')){
      return;
    }

    const ar: MarkColor[] = JSON.parse( localStorage.getItem('marcadores')! );
    ar.forEach( m => {

      const mark = new mapboxgl.Marker({
        color : m.color,
        draggable: true
      })
      .setLngLat( m.center! )
      .addTo( this.mapa );

      this.marcadores.push({
        marker: mark,
        color: m.color
      })

      mark.on('dragend',()=> {
        this.guardarMarcadores();
      });
    });
  }


  borrarM(i: number){
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i,1);

    this.guardarMarcadores();
  }
}
