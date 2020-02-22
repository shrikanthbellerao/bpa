import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
  
  public pieChartLabels: Label[] =[];
  // public pieChartData: number[]= [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
   
  };

  // public pieChartLabels: Label[] = [["In-Process"],["Complete"],["Rollback-In-Process"]];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  // public pieChartColors = [{
  //   backgroundColor: []
  // }];

  // public colorList = [{
  //   categoryName: ,
  //   backgroundColor: 'rgba(255,0,0,0.3)'
  // },{
  //   categoryName: ,
  //   backgroundColor: 'rgba(0,255,0,0.3)'
  // },{
  //   categoryName: ,
  //   backgroundColor: 'rgba(0,0,255,0.3)'
  // }];

  constructor() { }

  ngOnInit() {
    const fakeApiResponse = [{
      categoryName: "In-Process",
      nbrOfServiceItems: 5
      },{
      categoryName: "Complete",
      nbrOfServiceItems: 1
      },{
      categoryName: "Rollback-In-Process",
      nbrOfServiceItems: 2
      }]

  fakeApiResponse.forEach(data => {
    this.pieChartLabels.push([data.categoryName]);
    this.pieChartData.push(data.nbrOfServiceItems);

    // let colorObj = this.pieChartColors.find(ele => {
    //   return ele['categoryName'] === data.categoryName;
    // });

    // console.log('colorObj: ', colorObj);

    // this.pieChartColors[0].backgroundColor.push(colorObj.backgroundColor);
    
  });
  
}
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  /*addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }*/

}
