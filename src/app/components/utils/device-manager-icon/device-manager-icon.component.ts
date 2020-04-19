import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


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

  onView() {
    if (this.clickedRow.View instanceof Function) {
      const params = {
        rowData: this.clickedRow.node.data
      };
      this.clickedRow.View(params);

    }
  }

  onPing() {
    if (this.clickedRow.Ping instanceof Function) {
      const params = {
        rowData: this.clickedRow.node.data
      };
      this.clickedRow.Ping(params);

    }
  }

  onEdit() {
    if (this.clickedRow.Edit instanceof Function) {
      const params = {
        rowData: this.clickedRow.node.data
      };
      this.clickedRow.Edit(params);

    }
  }

  ngOnInit() {
  }

}
