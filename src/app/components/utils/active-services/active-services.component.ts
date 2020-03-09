import { Component, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { UserButtonsComponent } from 'src/app/components/utils/user-buttons/user-buttons.component';
import { TimelineComponent } from 'src/app/components/utils/timeline/timeline.component';

@Component({
  selector: 'app-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.css']
})
export class ActiveServicesComponent implements OnInit {

  timeline = []

  rowData: any = [];
  // filter1;
  serviceItem;
  showSelectedData
  constructor(private bpaService: BpaService) {}
  private gridApi;

  
  
  ngOnInit() {
    this.bpaService.getActiveServices().subscribe(response => {

      console.log('response...', response);

      this.rowData = response['data'].map((obj) => {
        obj.formData = JSON.stringify(obj.formData.connectionRow);
        console.log(obj.formData);console.log('\n');
        return obj;
      });
      // console.log('\n\n this.rowData...', this.rowData);
      // this.filter1 = this.rowData;
    }), err => console.log('error')
    
  }
  onGridReady = params => {
    // Following line to make the currently visible columns fit the screen  
    params.api.sizeColumnsToFit();
    this.gridApi=params.api;
    // Following line dymanic set height to row on content
    params.api.resetRowHeights();
 };
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  columnDefs = [
    
    { headerName: 'Order Id', field: 'orderNumber', sortable: true, filter: 'agNumberColumnFilter' , checkboxSelection: true ,width: 120 ,unSortIcon: true },
    { headerName: 'Order Instance Id', field: 'processInstanceId', sortable: true, filter: true, width: 120 },
    { headerName: 'Service', field: 'description', sortable: true, filter: true, width: 120 },
    { headerName: 'Action', cellRenderer: (res => 'Create'), sortable: true, filter: true, width: 120 },
    { headerName: 'Order Form', field: 'formData', sortable: true, filter: true, width: 120 },
    { headerName: 'Start-Time', field: 'createdAt', sortable: true, filter: 'agDateColumnFilter', width: 120 },
    { headerName: 'Update-Time', field: 'updatedAt', sortable: true, filter: 'agDateColumnFilter', width: 120 },
    { headerName: 'User', field: 'userName', sortable: true, filter: true, width: 120 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 120 },
    { headerName: 'User Actions', field: 'useractions', cellRendererFramework: UserButtonsComponent , width: 120 }
      
  ];

onBtnExport(){
this.gridApi.exportDataAsCsv();

}

agGroupCellRenderer(response)
{
console.log('response:',response) 

}

onRowSelected(event) {
  this.timeline = [];
  console.log(event.data);
  this.showSelectedData = event.data;

  this.bpaService.getActions(event.data._id).subscribe((res) => {
    console.log('dsagdjgadha', res);
  res['data'].forEach(element => {
   this.timeline.push({
      icontype : 'check-square',
      header : element.milestone,
      time:'567'
    })
  });
  })
}

 


}