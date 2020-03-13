import { Component, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { UserButtonsComponent } from 'src/app/components/utils/user-buttons/user-buttons.component';
import { TimelineComponent } from 'src/app/components/utils/timeline/timeline.component';
import { HrTimelineComponent } from 'src/app/components/utils/hr-timeline/hr-timeline.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.css']
})
export class ActiveServicesComponent implements OnInit {

  timeline = []
timelines =[]
  rowData: any = [];
  // filter1;
  serviceItem;
  showSelectedData
  constructor(private bpaService: BpaService,private router: Router) {}
  private gridApi;
modalConfig : any;
modalC : any;
displayModal :any;
selectedRowsNo: any;
paginationPageSize: any;
gridColumnApi: any;


  count = 0;
  
  ngOnInit() {
    this.bpaService.getActiveServices().subscribe(response => {

      console.log('response...', response);

      this.rowData = response['data'].map((obj) => {

        obj.updatedAt = this.bpaService.fnFormatDate(obj.updatedAt);

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
    
    { headerName: 'Order Id', field: 'orderNumber', sortable: true, filter: 'agNumberColumnFilter' , width: 100 ,unSortIcon: true },
    { headerName: 'Order Instance Id', field: 'processInstanceId', sortable: true, filter: true, width: 120  },
    { headerName: 'Service', field: 'description', sortable: true, filter: true, width: 120 },
    { headerName: 'Action', cellRenderer: (res => 'Create'), sortable: true, filter: true, width: 120 },
    { headerName: 'Order Form', field: 'formData', sortable: true, filter: true, width: 120 },
    { headerName: 'Start-Time', field: 'createdAt', sortable: true, filter: 'agDateColumnFilter', width: 120 },
    { headerName: 'Update-Time', field: 'updatedAt', sortable: true, filter: 'agDateColumnFilter', width: 120 },
    { headerName: 'User', field: 'userName', sortable: true, filter: true, width: 120 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 120 },
    { headerName: 'User Actions', field: 'useractions', cellRendererFramework: UserButtonsComponent ,  cellRendererParams: {
      onClick: this.onViewBtnClick.bind(this), Ping: this.onPingBtnClick.bind(this)}, width: 120 }
      
  ];

onBtnExport(){
this.gridApi.exportDataAsCsv();

}

agGroupCellRenderer(response)
{
console.log('response:',response) 

}
onViewBtnClick(event) {
  this.timeline = [];
  console.log(event.rowData);
  this.showSelectedData = event.rowData;
  this.bpaService.getActions(event.rowData._id).subscribe((res) => {
    console.log('dsagdjgadha', res);
    res['data'].forEach(element => {
      if(element.status === 'Complete') {
      this.timeline.push({
        header : element.milestone,
        status: element.status
      })
      
    };
  })
    this.showSelectedData = event.rowData;
    this.count = (100/res['data'].length)*this.timeline.length;
    this.bpaService.setStatus({timeline: this.timeline, showData: this.showSelectedData,count: this.count});
    this.router.navigate(['/activeStatus'])

  
  })
}
onPingBtnClick(event){
  this.timelines = [];
  this.showSelectedData = event.rowData;
  this.bpaService.getActions(event.rowData._id).subscribe((res) => {
    console.log('dsagdjgadha', res);
    res['data'].forEach(element => {
      this.timelines.push({
        icontype : "eye" ,
        header : element.milestone,
        time: element.updatedAt
      })

      
    });
    this.count = (100/res['data'].length)*this.timelines.length;
    // this.showSelectedData = event.rowData;
    // this.modalC = {
    //   title: 'Milestones Completed:',
    //   body: '',

    //   buttonList: []
    // };
    // console.log('ModalConfig',this.modalC)
    // this.displayModal = true;

  })
  
}

hideModal() {
  this.displayModal = false;
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

}
 


