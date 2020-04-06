import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { DeviceManagerIconComponent } from 'src/app/components/utils/device-manager-icon/device-manager-icon.component';
import { UserActionsDownloadCsvComponent } from 'src/app/components/utils/user-actions-download-csv/user-actions-download-csv.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  paginationPageSize: any;
  modalConfig: any;
  deviceList: any;
  rowDatafromCell: any;
  pingDeviceInfo: any;
  pingStatus: any;
  displayModal: any = false;
  displayEditModal: any = false;
  formCheck: any;
  // selectedRowsNo: any;

  deviceForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', Validators.required),
    address: new FormControl('',
      [Validators.required,
      Validators.pattern(/^(([1-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.)(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){2}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]),
    port: new FormControl('', Validators.required),
    protocol: new FormControl('', Validators.required),
    controller_id: new FormControl('', Validators.required),
    authgroup: new FormControl('', Validators.required),
  });

  ngOnInit() {

    this.columnDefs = [
      { headerName: 'Name', field: 'name', sortable: true, filter: true, width: 300 },
      { headerName: 'Address', field: 'address', sortable: true, filter: true, width: 150 },
      { headerName: 'Controller', field: 'controller_id', sortable: true, filter: true, width: 150 },
      { headerName: 'Port', field: 'port', sortable: true, filter: true, width: 100 },
      { headerName: 'Protocol', field: 'protocol', sortable: true, filter: true, width: 150 },
      { headerName: 'Auth Group', field: 'authgroup', sortable: true, filter: true, width: 150 },
      { headerName: 'Ned ID', field: 'ned_id', sortable: true, filter: true, width: 250 },
      {
        headerName: 'User Actions', field: 'useractions', cellRendererFramework: DeviceManagerIconComponent,
        cellRendererParams: {
          View: this.onViewBtnClick.bind(this),
          Ping: this.onPingBtnClick.bind(this),
          Edit: this.onEditBtnClick.bind(this)
        },
        editable: false, headerComponentFramework: UserActionsDownloadCsvComponent, width: 200,
        headerComponentParams: {
          onDownloadClick: this.onBtnExport.bind(this)
        }
      }
    ];

    this.defaultColDef = {
      editable: false,
      resizable: false,
    };

    this.getDeviceData();
  }

  getDeviceData() {
    this.bpaService.getDeviceList().subscribe(response => {

      this.rowData = [];
      this.deviceList = response['body'];
      this.deviceList.forEach(item => {
        this.rowData.push({
          _id: item._id,
          name: item.name,
          address: item.address,
          controller_id: item.controller_id,
          port: item.port,
          protocol: item.protocol,
          authgroup: item.authgroup,
          ned_id: item.ned_id,
          latitude: item.latitude,
          longitude: item.longitude,
          sub_controller_id: item.sub_controller_id
        });
      });
    });
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

    });

  }

  onEditBtnClick(e) {
    this.rowDatafromCell = e.rowData;
    this.deviceForm.patchValue({
      _id: this.rowDatafromCell._id,
      name: this.rowDatafromCell.name,
      address: this.rowDatafromCell.address,
      port: this.rowDatafromCell.port,
      protocol: this.rowDatafromCell.protocol,
      authgroup: this.rowDatafromCell.authgroup,
      controller_id: this.rowDatafromCell.controller_id
    });

    this.formCheck = this.deviceForm.value;
    this.displayEditModal = true;
  }

  hideModal() {
    this.displayModal = false;
    this.displayEditModal = false;
  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onDeviceFormSubmit() {
    if (this.formCheck === this.deviceForm.value) {
      this.displayEditModal = false;
    } else {
      this.bpaService.editDevice(this.deviceForm.value).subscribe(response => {
        if (response['status'] === 'Success') {
          this.displayEditModal = false;
          this.getDeviceData();
        }
      });
    }
  }

  // onSelectionChanged() {
  //   const selectedRows = this.gridApi.getSelectedRows();
  //   this.selectedRowsNo = selectedRows.length;
  // }

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

