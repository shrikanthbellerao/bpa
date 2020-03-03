import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';

@Component({
  selector: 'app-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.css']
})
export class ActiveServicesComponent implements OnInit {

  rowData: any = [];

  serviceItem;
  constructor(private bpaService: BpaService) {}
  
  
  ngOnInit() {
    this.bpaService.getActiveServices().subscribe(response => {

      console.log('response...', response);

      this.rowData = response['data'].map((obj) => {
        obj.formData = JSON.stringify(obj.formData.connectionRow);
        console.log(obj.formData);console.log('\n');
        return obj;
      });
      console.log('\n\n this.rowData...', this.rowData);

    }), err => console.log('error')
  }

  columnDefs = [
    
    { headerName: 'Order Id', field: 'orderNumber', sortable: true, filter: true, width: 100 },
    { headerName: 'Order Instance Id', field: 'processInstanceId', sortable: true, filter: true, width: 100 },
    { headerName: 'Service', field: 'description', sortable: true, filter: true, width: 100 },
    { headerName: 'Action', cellRenderer: (res => 'Create'), sortable: true, filter: true, width: 100 },
    { headerName: 'Order Form', field: 'formData', sortable: true, filter: true, width: 100 },
    { headerName: 'Start-Time', field: 'createdAt', sortable: true, filter: true, width: 100 },
    { headerName: 'Update-Time', field: 'updatedAt', sortable: true, filter: true, width: 100 },
    { headerName: 'User', field: 'userName', sortable: true, filter: true, width: 100 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
  ];



}

