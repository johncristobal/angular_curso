import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors: Color[] = [
    {
      backgroundColor: [
        '#ffddaa',
        '#ffdda1',
        '#fadda2',
        '#fbdda3',
        '#fcdda4',
      ]
    }
  ];

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100],
    //[50, 150, 120],
    //[250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private service: GraficasService) { }

  ngOnInit(): void {
    // this.service.getGraficasData()
    // .subscribe(data => {
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);


    // });

    this.service.getData()
    .subscribe( ({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    })
  }
}
