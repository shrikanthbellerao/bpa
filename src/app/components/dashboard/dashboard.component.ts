import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
constructor() { 

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
