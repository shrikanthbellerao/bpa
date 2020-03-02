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
activeServices;
serviceItem;
constructor(private bpaService: BpaService) { 
  this.bpaService.getActiveServices().subscribe(response => {
    console.log('response...', response);
    this.activeServices= response['data'];
    this.rowData = response['data'];
  }), err => console.log('error')
  

  // this.bpaService.getServiceItem().subscribe(response => {
  //   console.log('response...', response);
  //   this.serviceItem= response['data'];
  //   this.rowData = response['data'];
  // }), err => console.log('error')
 }

  ngOnInit() {
  }
  columnDefs = [
   
    {headerName: 'Order Id', field: 'orderNumber' , sortable: true , filter:true ,  width:100 },
    {headerName: 'Order Instance Id', field: 'processInstanceId',  sortable: true , filter:true , width:100 },
    {headerName: 'Service', field: 'description' , sortable: true , filter:true  , width:100},
    {headerName: 'Action' , cellRenderer: (res => 'Create'),sortable: true , filter:true , width:100 },
    {headerName: 'Order Form', field: 'formData.connectionRow' , sortable: true , filter:true , width:100 },
    {headerName: 'Start-Time', field: 'createdAt' , sortable: true , filter:true  , width:100},
    {headerName: 'Update-Time', field: 'updatedAt' , sortable: true , filter:true , width:100},
    {headerName: 'User', field: 'userName' , sortable: true , filter:true , width:100},
    {headerName: 'Status', field: 'status' , sortable: true , filter:true ,width:100 },
  ];
 
 

}

