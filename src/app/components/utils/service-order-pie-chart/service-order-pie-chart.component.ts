import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-service-order-pie-chart',
  templateUrl: './service-order-pie-chart.component.html',
  styleUrls:  ['./service-order-pie-chart.component.css']
})
export class ServiceOrderPieChartComponent implements OnInit {

  @Input() chart1Elements: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    }
  };

  public pieChartLabels: Label[] =[];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#e83e8c','#ffc107','#20c997','#007bff','#D35400'],
    },
  ];
 
  constructor() { }

  ngOnInit() {

    let piedata = [];

    console.log('chartdata',this.chart1Elements)
    piedata = this.fnpiechart(this.chart1Elements);
    console.log('piedata',piedata);
    this.pieChartLabels.push("Completed Orders","Rollback-In-Process Orders","In-process Orders","Rollback Orders","Cancelled Orders");
    piedata.forEach(element => {
      this.pieChartData.push(element);
    });
 }

  fnpiechart(chartdata) {

    let data = [];
    let complete = 0;
    let rip = 0;
    let inprocess = 0;
    let rollback = 0;
    let cancelled = 0;

    if(chartdata){
      chartdata.forEach((data) => {
    
          if(data.status === 'Complete')
          ++complete;
        
        if(data.status === 'Rollback-In-Process')
          ++rip;
  
        if(data.status === 'In-process')
          ++inprocess;
  
        if(data.status === 'Rollback')
          ++rollback;
  
        if(data.status === 'Cancelled')
          ++cancelled;
      })
    }

    data.push(complete,rip,inprocess,rollback,cancelled);
    return data;
    
  }
}