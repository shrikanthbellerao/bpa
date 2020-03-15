import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-action-icon-active-services',
  templateUrl: './user-action-icon-active-services.component.html',
  styleUrls: ['./user-action-icon-active-services.component.css']
})
export class UserActionIconActiveServicesComponent implements OnInit {

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



