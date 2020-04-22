import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { BpaService } from 'src/app/service/bpa.service';
import { ActiveServicesIconComponent } from 'src/app/components/utils/active-services-icon/active-services-icon.component';
import { HorizontalTimelineComponent } from 'src/app/components/utils/horizontal-timeline/horizontal-timeline.component';
import { UserActionsDownloadCsvComponent } from 'src/app/components/utils/user-actions-download-csv/user-actions-download-csv.component';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-active-services',
  templateUrl: './active-services.component.html'
})
export class ActiveServicesComponent implements OnInit {

  timeline = []
  rowData: any = [];
  // filter1;
  serviceItem;
  showSelectedData
  constructor(private bpaService: BpaService, private router: Router) { }
  private gridApi;
  selectedRowsNo: any;
  paginationPageSize: any;
  gridColumnApi: any;


  count = 0;

  ngOnInit() {
    this.bpaService.getActiveServices().subscribe(response => {
      console.log(response);
      this.rowData = response['body'].map((obj) => {
        console.log("Date updated", obj)
        obj.updatedAt = this.bpaService.fnFormatDate(obj.updatedAt);
        // obj.formData =JSON.stringify(obj.formData);
        obj.formData = (obj.formData && obj.formData['connectionRow']) ? JSON.stringify(obj.formData['connectionRow']) : JSON.stringify(obj.formData);
        console.log(obj.formData); console.log('\n');
        return obj;
      });
    }, err => console.log('error')
    )
  }
  onGridReady = params => {
    // Following line to make the currently visible columns fit the screen  
    params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    // Following line dymanic set height to row on content
    params.api.resetRowHeights();
  };
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  columnDefs = [

    { headerName: 'Order Id', field: 'orderNumber', sortable: true, filter: 'agNumberColumnFilter', width: 100, unSortIcon: true },
    { headerName: 'Order Instance Id', field: 'processInstanceId', sortable: true, filter: true, width: 120 },
    { headerName: 'Service', field: 'description', sortable: true, filter: true, width: 120 },
    { headerName: 'Action', cellRenderer: (res => 'Create'), sortable: true, filter: true, width: 120 },
    { headerName: 'Order Form', field: 'formData', sortable: true, filter: true, width: 120 },
    { headerName: 'Start-Time', field: 'createdAt', sortable: true, filter: true, width: 120 },
    { headerName: 'Update-Time', field: 'updatedAt', sortable: true, filter: true, width: 120 },
    { headerName: 'User', field: 'userName', sortable: true, filter: true, width: 120 },
    { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 120 },
    {
      headerName: 'User Actions', field: 'useractions', sortable: false, filter: false, cellRendererFramework: ActiveServicesIconComponent, cellRendererParams: {
        onClick: this.onViewBtnClick.bind(this)
        // , Ping: this.onPingBtnClick.bind(this)
      }, width: 120, editable: false, headerComponentFramework: UserActionsDownloadCsvComponent,
      headerComponentParams: {
        onDownloadClick: this.onBtnExport.bind(this)
      }
    }

  ];

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  agGroupCellRenderer(response) {
    console.log('response:', response)
  }
  onViewBtnClick(event) {
    this.timeline = [];
    this.showSelectedData = event.rowData;
    // console.log('aaaa' , this.rowData);

    this.bpaService.getActions(event.rowData._id).subscribe((res) => {
      console.log("milestone", res);
      res['body'].forEach(element => {
        // console.log('asdffghh', res);
        if (element.status === 'Complete') {
          this.timeline.push({
            header: element.milestone,
            status: element.status,
            time: element.updatedAt
          })

        };

        // this.count = (100 / res['body']['data'].length) * this.timeline.length;
      })
      this.showSelectedData = event.rowData;
      if (this.timeline.length>0){
      console.log('length of timeline', res['body'].length, this.timeline.length);
      this.count = (100 / res['body'].length) * this.timeline.length;
      }
      else this.count = 0
      this.bpaService.setServiceOrderStatus({ timeline: this.timeline, showData: this.showSelectedData, count: this.count });
      this.router.navigate(['/activeStatus'])


    })
  }
  // onPingBtnClick(event) {
  //   this.timelines = [];
  //   this.showSelectedData = event.rowData;
  //   this.bpaService.getActions(event.rowData._id).subscribe((res) => {
  //     res['data'].forEach(element => {
  //       this.timelines.push({
  //         icontype: 'eye',
  //         header: element.milestone,
  //         time: element.updatedAt
  //       })


  //     });

  //   })
  // }

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
