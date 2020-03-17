import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-service-order-pie-chart',
  templateUrl: './service-order-pie-chart.component.html',
  styleUrls:  ['./service-order-pie-chart.component.css']
})
export class ServiceOrderPieChartComponent implements OnInit {

  @Input()
  chart1Elements: any;

  // public pieChartData: number[]= [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  // public pieChartLabels: Label[] = [["In-Process"],["Complete"],["Rollback-In-Process"]];
  public pieChartLabels: Label[] =[];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#e83e8c','#ffc107','#20c997','#007bff'],
    },
  ];

  completeCount = 0;
  ripCount = 0;
  inprocessCount = 0;
  rollbackCount = 0;
  constructor() { }

  ngOnInit() {

    // console.log(this.chart1Elements);

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
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  }

}
