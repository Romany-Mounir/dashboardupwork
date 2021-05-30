import { Component } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-barlinechart',
  templateUrl: './barlinechart.component.html',
  styleUrls: ['./barlinechart.component.css'],
})
export class BarlinechartComponent {
  publicJobs: Jobs[];
  closedJobs: Jobs[];
  hiredJobs: Jobs[];
  closedjobsnum: number;
  hiredjobsnum: number;
  publicjobsnum: number;
  alljobs: number[];
  constructor(private jobservice: JobsService) {}
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['public Jobs', 'Hired Jobs', 'Closed Jobs'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  ngOnInit() {
    this.jobservice.getJobsHired().subscribe(
      (res) =>
        (this.hiredJobs = res.map((e) => {
          console.log(e.payload.doc.data());
          return {
            ...(e.payload.doc.data() as object),
          } as Jobs;
        }))
    );

    this.jobservice.getJobsPublic().subscribe(
      (res) =>
        (this.publicJobs = res.map((e) => {
          console.log(e.payload.doc.data());
          return {
            ...(e.payload.doc.data() as object),
          } as Jobs;
        }))
    );

    this.jobservice.getJobsClosed().subscribe(
      (res) =>
        (this.closedJobs = res.map((e) => {
          console.log(e.payload.doc.data());
          return {
            ...(e.payload.doc.data() as object),
          } as Jobs;
        }))
    );
    //  this.closedjobsnum = this.closedJobs.length;
    // this.hiredjobsnum = this.hiredJobs.length;
    //this.publicjobsnum = this.publicJobs.length;
    //console.log(this.publicjobsnum);
    //this.alljobs = [this.publicjobsnum, this.hiredjobsnum, this.closedjobsnum];
  }

  barChartData: ChartDataSets[] = [
    { data: [8, 12, 18], label: 'Jobs Dataset' },
    // { data: [280, 480, 400, 790, 960, 887, 140], label: 'Dataset2' }
  ];

  barChartColors: Color[] = [
    {
      backgroundColor: '#75C181',
      borderColor: '#75C181',
    },
    // {
    //   backgroundColor: '#5B99EA',
    //   borderColor: '#5B99EA',
    // }
  ];
}
