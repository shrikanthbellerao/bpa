import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  @Input()
  chartElements:any;

  constructor() { }

  chart:any = [];
  
  ngOnInit() {
  
    // this.chartElements.forEach((data) => {
    //     if(data.categoryIds.name === "Refresh Cisco IP Phone")
    //       this.collabCount++;
    //       // if(this.flag1)
    //       //  this.collabCount++;
    //       // else 
    //       //  this.collab1Count++;
        
    //       // this.flag1 = !this.flag1;
        
    //     if(data.categoryIds.name === "MVP Service Catalog Refresh #2")
    //       this.mvpCount++;
    //       // if(this.flag2)
    //       //  this.mvpCount++;
    //       // else
    //       //  this.mvp1Count++;

    //       //  this.flag2 = !this.flag2;
    
    //     if(data.categoryIds.name === "Enterprise Services")
    //       this.enterpriseCount++;
    //       // if(this.flag3)
    //       //  this.enterpriseCount++;
    //       // else
    //       //  this.enterprise1Count++;

    //       //  this.flag3 = !this.flag3;
        
        
    //     if(data.categoryIds.name === "Core Services")
    //       this.coreCount++;
    //       // if(this.flag4)
    //       //  this.coreCount++;
    //       // else
    //       //  this.core1Count++;

    //       //  this.flag4 = !this.flag4;
        
         
    //     if(data.categoryIds.name === "Branch Services")
    //       this.branchCount++;
    //       // console.log(this.branchCount);
    //       // if(this.flag5)
    //       //  this.branchCount++;
    //       // else
    //       //  this.branch1Count++;

    //       // this.flag5 = !this.flag5;
        
        
    //     if(data.categoryIds.name === "DMZ Services")
    //       this.dmzCount++;
    //       // if(this.flag6)
    //       //  this.dmzCount++;
    //       // else
    //       //  this.dmz1Count++;

    //       // this.flag6 = !this.flag6;
        
         
    //     if(data.categoryIds.name === "Common Services")
    //       this.commonCount++;
    //       // if(this.flag7)
    //       //  this.commonCount++;
    //       // else
    //       //  this.common1Count++;

    //       // this.flag7 = !this.flag7;
        
         
    //     if(data.categoryIds.name === "Data Center Services")
    //       this.datacenterCount++;
    //       // if(this.flag8)
    //       //  this.datacenterCount++;
    //       // else
    //       //  this.datacenter1Count++;

    //       // this.flag8 = !this.flag8;
        
    // })
    
  
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["Collaboration","MVP","Enterprise","Core","Branch","Common","Data Center"],
        datasets: [
          { 
            label: "Admin",
            data: [5,1,3,1,7,2,1,2],
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

