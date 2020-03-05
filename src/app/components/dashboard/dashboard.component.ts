import { Component, OnInit } from '@angular/core';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart1dash:any;
  chartDash:any;
  timelinedash:any = [{ 
    icontype : "coffee",
    header : "Coffee Break",
    time: "11am",
  },
  {
    icontype:"users",
    header:"Presentation",
    time: "2pm",
  },
  {
    icontype:"cog fa-spin fa-fw",
    header:"Framework",
    time: "3pm",
  },
  {
    icontype:"code",
    header:"Code",
    time: "4pm",
  },
  {
    icontype:"bolt",
    header:"Meetup",
    time: "5pm",
  } ];

constructor(private bpaservice : BpaService) { 
  this.bpaservice.getServiceorders().subscribe(res => {
    console.log('response:',res);
    this.chart1dash = res['data'];
  }, err => console.log('Error:',err))

  this.bpaservice.getServiceitems().subscribe(res => {
    console.log('response:',res);
    this.chartDash = res['data'];
  }, err => console.log('Error:',err))

}

ngOnInit() {
} 
//  this.timelinedash = [{ 
//     icontype : "coffee",
//     header : "Let's have coffee",
//   },
//   {
//     icontype:"users",
//     header:"Presentation",
//   } ]

}
