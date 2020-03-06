import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.css']
})
export class ButtonRendererComponent implements ICellRendererAngularComp {

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
