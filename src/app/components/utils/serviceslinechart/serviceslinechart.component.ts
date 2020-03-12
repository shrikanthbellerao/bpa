import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-serviceslinechart',
  templateUrl: './serviceslinechart.component.html',
  styleUrls: ['./serviceslinechart.component.css']
})
export class ServiceslinechartComponent implements OnInit {
 
  @Input()
  chartElements:any;

  constructor() { }

  chart:any = [];
  objservice = [];
  

  ngOnInit() {

    let counts = [];
    this.chartElements.forEach((x) => { counts[x.categoryIds[0].name] = (counts[x.categoryIds[0].name] || 0)+1; });
    
    console.log('counts',Object.keys(counts))
    console.log('counts',[...Object.values(counts)].map((res) => (res/2 === 0) ? res/2 : res))
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: Object.keys(counts),
        datasets: [
          { 
            label: "Admin",
            data: Object.values(counts),
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            label: "Non-Admin",
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
            display: false
          }],
        }
      }
    });
  
  }
}

