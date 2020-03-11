import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { ButtonRendererComponent } from 'src/app/components/utils/button-renderer/button-renderer.component';

@Component({
  selector: 'app-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.css']
})
export class DeviceManagerComponent implements OnInit {
  constructor(private bpaService: BpaService) {
  }

  private gridApi: any;
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
  displayModal = false;

  ngOnInit() {

    this.columnDefs = [

      {
        headerName: 'Name', field: 'name', sortable: true, filter: true, headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      { headerName: 'Address', field: 'address', sortable: true, filter: true },
      { headerName: 'Controller', field: 'controller_id', sortable: true, filter: true },
      { headerName: 'Port', field: 'port', sortable: true, filter: true },
      { headerName: 'Protocol', field: 'protocol', sortable: true, filter: true },
      { headerName: 'Auth Group', field: 'authgroup', sortable: true, filter: true },
      { headerName: 'Ned ID', field: 'ned_id', sortable: true, filter: true },
      {
        headerName: 'User Actions', field: 'useractions', cellRendererFramework: ButtonRendererComponent,
        cellRendererParams: {
          onClick: this.onViewBtnClick.bind(this),
          Ping: this.onPingBtnClick.bind(this)

        }, editable: false
      }

    ];
    this.defaultColDef = {
      editable: true,
      resizable: true,
    };




    this.bpaService.getDeviceList().subscribe(response => {
      this.rowData = [];
      this.deviceList = response;
      for (let i = 0; i < this.deviceList.length; i++) {
        this.rowData.push({
          name: this.deviceList[i].name,
          address: this.deviceList[i].address,
          controller_id: this.deviceList[i].controller_id,
          port: 22,
          protocol: this.deviceList[i].protocol,
          authgroup: this.deviceList[i].authgroup,
          ned_id: this.deviceList[i].ned_id,
          latitude: this.deviceList[i].latitude,
          longitude: this.deviceList[i].longitude,
          sub_controller_id: this.deviceList[i].sub_controller_id
        });
      }
    }), () => console.log('Error');
  }

  onViewBtnClick(e) {


    this.rowDatafromCell = e.rowData;
    this.modalConfig = {
      title: ' Device View',
      body: `<div class="container">
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Name</strong>` + this.rowDatafromCell.name + `</p></div>
        <div class="col md-6">
          <p><strong class="mr-4">Address</strong> ` + this.rowDatafromCell.address + `</p>
        </div>
      </div>
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Port &nbsp;&nbsp;</strong>` + this.rowDatafromCell.port + `</p></div>
        <div class="col md-6">
          <p><strong class="mr-3">Controller</strong>` + this.rowDatafromCell.controller_id + `</p>
        </div>
      </div>
      <div class="row">
        <div class="col md-6">
          <p><strong class="mr-4">Group</strong>` + this.rowDatafromCell.authgroup + `</p></div>
        <div class="col md-6">
          <p><strong class="mr-4">Protocol</strong> ` + this.rowDatafromCell.protocol + `</p>
        </div>
      </div>
      </div>`,

      buttonList: []
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
        body: `<table class="table">
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
        <tr>
        <td>` + this.rowDatafromCell.name + `</td>
        <td>` + this.rowDatafromCell.controller_id + `</td>
        <td>` + this.pingStatus[0].result[0].value + `</tr>
</table>`,
        buttonList: []
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


  buttonState() {
    if (this.selectedRowsNo > 0) {
      return false;
    } else {
      return true;
    }
  }

  deselectRows() {
    this.gridApi.deselectAll();
  }


  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
}
