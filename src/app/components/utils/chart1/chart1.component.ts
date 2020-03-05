import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  @Input()
  chart1Elements: any;

  // public pieChartData: number[]= [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
   
  };

  // public pieChartLabels: Label[] = [["In-Process"],["Complete"],["Rollback-In-Process"]];
  public pieChartLabels: Label[] =[];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  completeCount = 0;
  ripCount = 0;
  inprocessCount = 0;
  rollbackCount = 0;
  constructor() { }

  ngOnInit() {

    console.log(this.chart1Elements);
    this.chart1Elements.forEach((data) => {
     if(data.status === 'Complete')
      this.completeCount++;
    
     if(data.status === 'Rollback-In-Process')
      this.ripCount++;

     if(data.status === 'In-process')
      this.inprocessCount++;

     if(data.status === 'Rollback')
      this.rollbackCount++;
    })

  console.log('Active items',this.completeCount);
  this.pieChartLabels.push(["Complete"]);
  this.pieChartData.push(this.completeCount);
  this.pieChartLabels.push(["Rollback-In-Process"]);
  this.pieChartData.push(this.ripCount);
  this.pieChartLabels.push(["In-process"]);
  this.pieChartData.push(this.inprocessCount);
  this.pieChartLabels.push(["Rollback"]);
  this.pieChartData.push(this.rollbackCount);
  
 }
  // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  // }

}
