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
  private gridApi;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'app';

  deviceList;
  constructor(private bpaService: BpaService) {
  }
  rowData:any;
  defaultColDef;
  columnDefs;
  gridColumnApi;
  selectedRowsNo;
  paginationPageSize;
 
  ngOnInit() {
    
    this.columnDefs = [
      
      { headerName: 'Name', field: 'name', sortable: true, filter: true,headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true},
      { headerName: 'Address', field: 'address', sortable: true, filter: true},
      { headerName: 'Controller', field: 'controller_id', sortable: true, filter: true},
      { headerName: 'Port', field: 'port', sortable: true, filter: true},
      { headerName: 'Protocol', field: 'protocol', sortable: true, filter: true},
      { headerName: 'Auth Group', field: 'authgroup', sortable: true, filter: true},
      { headerName: 'Ned ID', field: 'ned_id', sortable: true, filter: true},
      { headerName: 'User Actions', field: 'useractions', cellRendererFramework:ButtonRendererComponent,editable:false}

    ];
    this.defaultColDef = {
      editable: true,
      resizable: true,
    };


    this.bpaService.getDeviceList().subscribe(response => {
      this.rowData = [];
      console.log(response);
      this.deviceList = response;
      for(let i = 0; i < this.deviceList.length; i++) {
        this.rowData.push({
          'name': this.deviceList[i].name,
          'address' : this.deviceList[i].address,
          'controller_id':this.deviceList[i].controller_id,
          'port' : this.deviceList[i].port,
          'protocol' : this.deviceList[i].protocol,
          'authgroup' : this.deviceList[i].authgroup,
          'ned_id':this.deviceList[i].ned_id,
          'latitude':this.deviceList[i].latitude
        })
      }
    }), err => console.log('Error');


  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    this.paginationPageSize = 25;

  }

  

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    this.selectedRowsNo = selectedRows.length;
  }


  buttonState(){
    if(this.selectedRowsNo>0)
      {
        return false;
      }
    else
    {
      return true;
    }
  }

  deselectRows(){
    this.gridApi.deselectAll();
  }
}
