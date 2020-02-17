import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  divyaLst: any;

  constructor() { }

  ngOnInit() {
    this.divyaLst = [{
      faName: 'coffee',
      heading: 'Lets have a Coffee',
      body: 'Lorem Ipsum @ 12:00 PM'
    },{
      faName: 'imdb',
      heading: 'Lets have a Tea',
      body: 'Lorem Ipsum @ 12:00 PM'
    },{
      faName: 'user-o',
      heading: 'Lets have a Dinner',
      body: 'Lorem Ipsum @ 12:00 PM'
    },{
      faName: 'id-card',
      heading: 'Lets have a Drink',
      body: 'Lorem Ipsum @ 12:00 PM'
    }];
  }
  
}
