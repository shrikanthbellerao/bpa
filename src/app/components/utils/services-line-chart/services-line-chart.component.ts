import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-services-line-chart',
  templateUrl: './services-line-chart.component.html',
  styleUrls: ['./services-line-chart.component.css']
})
export class ServicesLineChartComponent implements OnInit {
 
  @Input() chartElements:any;

  constructor() { }

  chart:any = [];  

  ngOnInit() {

    let counts = [];
    console.log('linechart',this.chartElements)
    
    counts = this.fnlinechart(this.chartElements);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: Object.keys(counts),
        datasets: [
          { 
            label: "Services under Admin",
            data: Object.values(counts),
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            label: "Services under Non-Admin",
            data: [1,5,1,2,6,1,2,1,4],
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  
  }

  fnlinechart(chartdata){
    let counts = [];
    if(chartdata){
      chartdata.forEach((x) => { counts[x.categoryIds[0].name] = (counts[x.categoryIds[0].name] || 0)+1 });
      }

      return counts;
  }
}

