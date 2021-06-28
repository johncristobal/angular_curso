import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public barChartLabels: Label[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#EDF312', hoverBackgroundColor: '#EDF312' },
    { data: [28, 48, 40, 19, 86, 27, 90, 100], label: 'Series B', backgroundColor: '#ED0012', hoverBackgroundColor: '#ED0012' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' , backgroundColor: '#EDAA12', hoverBackgroundColor: '#EDAA12'},
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
