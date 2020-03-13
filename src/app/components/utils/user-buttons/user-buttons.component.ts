import { Component, OnInit} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';
@Component({
  selector: 'app-user-buttons',
  templateUrl: './user-buttons.component.html',
  styleUrls: ['./user-buttons.component.css']
})
export class UserButtonsComponent implements ICellRendererAngularComp {

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


