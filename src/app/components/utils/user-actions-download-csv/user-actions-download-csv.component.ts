import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-user-actions-download-csv',
  templateUrl: './user-actions-download-csv.component.html',
  styleUrls: ['./user-actions-download-csv.component.css']
})
export class UserActionsDownloadCsvComponent implements ICellRendererAngularComp {

  constructor() { }
  downloadCsv: any;
  agInit(params) {
this.downloadCsv = params;
  }
  refresh(params?: any): boolean {
    return true;
  }

  ngOnInit() {
  }

  onBtnExport() {
    this.downloadCsv.onDownloadClick();
  }

}
