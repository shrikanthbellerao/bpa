import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-device-manager-icon',
  templateUrl: './device-manager-icon.component.html',
  styleUrls: ['./device-manager-icon.component.css']
})
export class DeviceManagerIconComponent implements ICellRendererAngularComp {

  constructor() { }

  clickedRow: any;

  agInit(params) {
    this.clickedRow = params;
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
      };
      this.clickedRow.Ping(params);

    }


  }

  ngOnInit() {
  }

}
