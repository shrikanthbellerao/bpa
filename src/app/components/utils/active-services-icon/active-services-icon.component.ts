import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-services-icon',
  templateUrl: './active-services-icon.component.html',
  styleUrls: ['./active-services-icon.component.css']
})
export class ActiveServicesIconComponent implements OnInit {

  constructor() { }
  clickedRow:any;

  agInit(params)
  {
    this.clickedRow=params;
  }
  refresh(params?: any): boolean {
    return true;
    }
    onView($event) {
      if (this.clickedRow.onClick instanceof Function) {
        const params = {
          event: $event,
          rowData: this.clickedRow.node.data
        };
        this.clickedRow.onClick(params);
  
      }
    }
    onPing($event) {
      if (this.clickedRow.onClick instanceof Function) {
      const params = {
      event: $event,
      rowData: this.clickedRow.node.data
      }
      this.clickedRow.Ping(params);
      }
    }
  ngOnInit() {
  }
  }



