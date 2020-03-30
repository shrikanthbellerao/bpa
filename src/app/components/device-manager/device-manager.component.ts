import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { DeviceManagerIconComponent } from 'src/app/components/utils/device-manager-icon/device-manager-icon.component';
import { UserActionsDownloadCsvComponent } from 'src/app/components/utils/user-actions-download-csv/user-actions-download-csv.component';


@Component({
  selector: 'app-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.css']
})
export class DeviceManagerComponent implements OnInit {
  constructor(private bpaService: BpaService) {
  }

  gridApi: any;
  rowData: any;
  defaultColDef: any;
  columnDefs: any;
  gridColumnApi: any;
  selectedRowsNo: any;
  paginationPageSize: any;
  modalConfig: any;
  deviceList: any;
  rowDatafromCell: any;
  pingDeviceInfo: any;
  pingStatus: any;
  displayModal: any = false;

  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Name', field: 'name', sortable: true, filter: true, width: 300 },
      { headerName: 'Address', field: 'address', sortable: true, filter: true, width: 150 },
      { headerName: 'Controller', field: 'controller_id', sortable: true, filter: true, width: 150 },
      { headerName: 'Port', field: 'port', sortable: true, filter: true, width: 100 },
      { headerName: 'Protocol', field: 'protocol', sortable: true, filter: true, width: 100 },
      { headerName: 'Auth Group', field: 'authgroup', sortable: true, filter: true, width: 150 },
      { headerName: 'Ned ID', field: 'ned_id', sortable: true, filter: true, width: 300 },
      { headerName: 'User Actions', field: 'useractions', cellRendererFramework: DeviceManagerIconComponent,
        cellRendererParams: {
          onClick: this.onViewBtnClick.bind(this),
          Ping: this.onPingBtnClick.bind(this)
        },
        editable: false, headerComponentFramework: UserActionsDownloadCsvComponent,
        headerComponentParams: {
          onDownloadClick: this.onBtnExport.bind(this)
        }
      }
    ];

    this.defaultColDef = {
      editable: false,
      resizable: false,
      
    };

    this.bpaService.getDeviceList().subscribe(response => {

      this.rowData = [];
      this.deviceList = response['body'];
      console.log(response['body']);
      this.deviceList.forEach(item => {
        this.rowData.push({
          name: item.name,
          address: item.address,
          controller_id: item.controller_id,
          port: 22,
          protocol: item.protocol,
          authgroup: item.authgroup,
          ned_id: item.ned_id,
          latitude: item.latitude,
          longitude: item.longitude,
          sub_controller_id: item.sub_controller_id
        });
      });
    }), () => console.log('Error');
  }

  onViewBtnClick(e) {

    this.rowDatafromCell = e.rowData;
    this.modalConfig = {
      title: ' Device View',
      body: `<div class="container">
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Name</strong>${this.rowDatafromCell.name}</p></div>
        <div class="col md-6">
          <p><strong class="mr-4">Address</strong>${this.rowDatafromCell.address}</p>
        </div>
      </div>
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Port &nbsp;&nbsp;</strong>${this.rowDatafromCell.port}</p></div>
        <div class="col md-6">
          <p><strong class="mr-3">Controller</strong>${this.rowDatafromCell.controller_id}</p>
        </div>
      </div>
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Group</strong>${this.rowDatafromCell.authgroup}</p></div>
        <div class="col md-6">
          <p><strong class="mr-4">Protocol</strong>${this.rowDatafromCell.protocol}</p>
        </div>
      </div>
      </div>`
    };
    this.displayModal = true;
  }

  onPingBtnClick(e) {

    this.rowDatafromCell = e.rowData;
    this.pingDeviceInfo = [
      {
        name: this.rowDatafromCell.name,
        controller_id: this.rowDatafromCell.controller_id,
        sub_controller_id: this.rowDatafromCell.sub_controller_id
      }
    ];
    this.bpaService.getPingResult(this.pingDeviceInfo).subscribe((response) => {
      this.pingStatus = response;
      this.modalConfig = {
        title: 'Ping Status',
        body: `<table class="table table-borderless">
        <thead class='thead-light'>
          <tr>
            <th scope="col md-2">
             Device
           </th>
           <th scope="col">
              Controller
            </th>
           <th scope="col">
              Result
            </th>
          </tr>
        </thead>
        <tr>
          <td>${this.rowDatafromCell.name}</td>
          <td>${this.rowDatafromCell.controller_id}</td>
          <td>${this.pingStatus.body.pingResponse}</td>
        </tr>
        </table>`
      };
      this.displayModal = true;

    }), () => console.log('Error');

  }

  hideModal() {
    this.displayModal = false;
  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    this.paginationPageSize = 15;

  }

  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.selectedRowsNo = selectedRows.length;
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  // buttonState() {
  //   if (this.selectedRowsNo > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // deselectRows() {
  //   this.gridApi.deselectAll();
  // }
}
