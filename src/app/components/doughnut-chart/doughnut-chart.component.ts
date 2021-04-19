// doughnut-chart-component.ts
import { Component } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  public donutColors:Color[];
  constructor(){
    this.donutColors =[
      {
        backgroundColor: [
          '#4BCE5E',
        'rgba(118, 183, 172, 1)',
        '#2986FF',
        'rgba(129, 78, 40, 1)',
        '#FFFFFF'
         
      ]
      }
    ];
  }

  doughnutChartLabels: Label[] = ['Green', 'Gray', 'Blue'];
  doughnutChartData: MultiDataSet = [
    [53, 30, 17]
  ];
  doughnutChartType: ChartType = 'doughnut';
  // doughnutChartColors: Color[] = [

  //   { // green
  //     backgroundColor: '#4BCE5E',
  //     borderColor: '#4BCE5E',
  //   },
  //   { // gray
  //     backgroundColor: '#A9B5C9',
  //     borderColor: '#A9B5C9',
  //   },
  //   { // blue
  //     backgroundColor: '#FFFFFF',
  //     borderColor: '#FFFFFF',
  //   }
  // ];



}

