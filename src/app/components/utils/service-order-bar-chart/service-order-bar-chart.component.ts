import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-service-order-bar-chart',
  templateUrl: './service-order-bar-chart.component.html',
  styleUrls:  ['./service-order-bar-chart.component.css']
})
export class ServiceOrderBarChartComponent implements OnInit {

  @Input() chart1Elements: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: true
      }],
    }
  };

  public barChartLabels: Label[] =[];
  public barChartData: number[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartColors = [
    {
      backgroundColor: ['#e83e8c','#ffc107','#20c997','#007bff','#D35400'],
    },
  ];
 
  constructor() { }

  ngOnInit() {

    let bardata = [];

    console.log('chartdata',this.chart1Elements)
    bardata = this.fnbarchart(this.chart1Elements);
    console.log('bardata',bardata);
    this.barChartLabels.push("Completed Orders","Rollback-In-Process Orders","In-process Orders","Rollback Orders","Cancelled Orders");
    bardata.forEach(element => {
      this.barChartData.push(element);
    });
 }

  fnbarchart(chartdata) {

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