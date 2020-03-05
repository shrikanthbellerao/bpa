import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input()
  chartElements:any;

  // // public barChartLabels: Label[] = ['06', '07', '08', '09', '10', '11', '12'];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  collabCount = 0;
  mvpCount = 0;
  enterpriseCount = 0;
  coreCount = 0;
  branchCount = 0;
  dmzCount = 0;
  commonCount = 0;
  datacenterCount = 0;

  constructor() { }

  ngOnInit() {

  console.log(this.chartElements);

  // this.chartElements.forEach((data) => {
  //   if(data.categoryIds.name === 'Collaboration Services')
  //    this.collabCount++;
   
  //   if(data.categoryIds.name === 'MVP Service Catalog')
  //    this.mvpCount++;

  //   if(data.categoryIds.name === 'Enterprise Services')
  //    this.enterpriseCount++;

  //   if(data.categoryIds.name === 'Core Services')
  //    this.coreCount++;

  //   if(data.categoryIds.name === 'Branch Services')
  //    this.branchCount++;

  //   if(data.categoryIds.name === 'DMZ Services')
  //    this.dmzCount++;

  //   if(data.categoryIds.name === 'Common Services')
  //    this.commonCount++;

  //   if(data.categoryIds.name === 'Data Center Services')
  //    this.datacenterCount++;
  //  })

  this.barChartLabels.push(["Collaboration"]);
  // this.barChartData.push(this.collabCount);
  this.barChartLabels.push(["MVP"]);
  // this.barChartData.push(this.mvpCount);
  this.barChartLabels.push(["Enterprise"]);
  // this.barChartData.push(this.enterpriseCount);
  this.barChartLabels.push(["Core"]);
  // this.barChartData.push(this.coreCount);
  this.barChartLabels.push(["Branch"]);
  // this.barChartData.push(this.branchCount);
  this.barChartLabels.push(["DMZ"]);
  // this.barChartData.push(this.dmzCount);
  this.barChartLabels.push(["Common"]);
  // this.barChartData.push(this.commonCount);
  this.barChartLabels.push(["Data Center"]);
  // this.barChartData.push(this.datacenterCount);
  }

  // // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   // console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}

