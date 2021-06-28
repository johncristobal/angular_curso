import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  @Input() barChartLabels: Label[] = [
  //  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#EDF312', hoverBackgroundColor: '#EDF312' },
    // { data: [28, 48, 40, 19, 86, 27, 90, 100], label: 'Series B', backgroundColor: '#ED0012', hoverBackgroundColor: '#ED0012' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' , backgroundColor: '#EDAA12', hoverBackgroundColor: '#EDAA12'},
  ];
  
  randomize(){
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 
    ];
  }
  
  constructor() {

   }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar';
    }
  }

}
