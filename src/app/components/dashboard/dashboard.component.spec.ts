// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChartsModule } from 'ng2-charts';
// import { forkJoin } from 'rxjs';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { DashboardComponent } from './dashboard.component';
// import { D3ZoomableSunburstComponent } from '../utils/d3-zoomable-sunburst/d3-zoomable-sunburst.component';
// import { ServiceOrderPieChartComponent } from '../utils/service-order-pie-chart/service-order-pie-chart.component';
// import { ServicesLineChartComponent } from '../utils/services-line-chart/services-line-chart.component';
// import { TimelineComponent } from '../utils/timeline/timeline.component';
// import { BpaService } from 'src/app/service/bpa.service'; 

// describe('DashboardComponent', () => {
//   let component: DashboardComponent;
//   let fixture: ComponentFixture<DashboardComponent>;
//   let service: BpaService;
//   var serviceorders = [
//     {
//       formData: [
//         {
//           crq: "CRQ111111111135"
//         }
//       ],
//       _id: "5e6b1f82650525011c3d8f0b",
//       orderNumber: 191,
//       processInstanceId: "c3495aff-64ee-11ea-bad9-0242ac120006",
//       description: "This service takes pre snapshot, and pre-check commands on devices within a site affected by a planned power upgrade.  After the upgrade has been completed, the service will capture post snapshot, and post-check commands and provide the user the ability to compare pre and post results.",
//       item: "Common Service CEWA",
//       createdAt: "2020-03-13T05:52:02.897Z",
//       updatedAt: "2020-03-13T05:52:03.834Z",
//       userName: "admin",
//       status: "In-process",
//       __v: 0
//     },
//     {
//       formData: [
//         {
//           crq: "CRQ123456789012"
//         }
//       ],
//       _id: "5e717ee14b975001362bc72a",
//       orderNumber: 199,
//       processInstanceId: "22d7753b-68bb-11ea-838d-0242ac120008",
//       description: "Modify switch configuration service is initiated when commissioning the switch port configuration to turn up the port to allow connection to one of the following endpoints in Branch domain.",
//       item: "Branch Modify Switch Configuration",
//       createdAt: "2020-03-18T01:52:33.957Z",
//       updatedAt: "2020-03-18T01:54:36.720Z",
//       userName: "admin",
//       status: "Rollback-In-Process",
//       __v: 0
//     },
//     {
//       formData: [
//         {
//           crq: "CRQ123456789012"
//         }
//       ],
//       _id: "5e706bdf650525011c3d8f13",
//       orderNumber: 198,
//       processInstanceId: "37c11b1d-6817-11ea-bad9-0242ac120006",
//       description: "Modify switch configuration service is initiated when commissioning the switch port configuration to turn up the port to allow connection to one of the following endpoints in Branch domain.",
//       item: "Branch Modify Switch Configuration",
//       createdAt: "2020-03-17T06:19:11.665Z",
//       updatedAt: "2020-03-17T06:23:38.325Z",
//       userName: "admin",
//       status: "Rollback",
//       __v: 0
//     },
//     {
//       formData: [
//         {
//           crq: "CRQ123456789012"
//         }
//       ],
//       _id: "5e705e209b5e31011d779cb9",
//       orderNumber: 196,
//       processInstanceId: "06614f0b-680f-11ea-bad9-0242ac120006",
//       description: "Modify switch configuration service is initiated when commissioning the switch port configuration to turn up the port to allow connection to one of the following endpoints in Branch domain.",
//       item: "Branch Modify Switch Configuration",
//       createdAt: "2020-03-17T05:20:32.835Z",
//       updatedAt: "2020-03-17T06:16:21.519Z",
//       userName: "admin",
//       status: "Complete",
//       __v: 0
//     }
//   ];

//   var serviceitem = [
//     {
//       name: "Refresh Cisco IP Phone",
//       categoryIds : [
//       {name: 'Collaboration Services'}]
//     },
//     {
//       name: "Enterprise IDE Switch Provisioning",
//       categoryIds: [
//         {name: 'Enterprise Services'}]
//     },             
//     {
//       name: "Link Route Away/Restore Management",
//       categoryIds: [
//         {name: 'Core Services'}]
//     },
//     {
//       name: "Common Service - Global Configuration v1.0.0",
//       categoryIds: [
//         {name: 'Common Services'}]
//     },
//     {
//       name: "B2B PSK Rotation",
//       categoryIds: [
//         {name: 'DMZ Services'}]
//     },
//     {
//       name: "Data Center Modify Switch Config",
//       categoryIds: [
//         {name: 'Data Center Services'}]
//     },
//     {
//       name: "Branch Router Provisioning",
//       categoryIds: [
//         {name: 'Branch Services'}]
//     }
//   ];

//   beforeEach(async(() => {
//     const bpaServiceStub = () => ({
//       fnFetchBroadcastMessage: () => ({ subscribe: f => f({ broadcastMessage: 'i am another message'}) }),
//       getServiceItems : () => ({ subscribe: f => f({'body': serviceitem }) }),
//       getServiceorders: () => ({ subscribe: f => f({'body': serviceorders }) })
//     });
//     TestBed.configureTestingModule({
//       imports: [ChartsModule],
//       declarations: [ DashboardComponent,D3ZoomableSunburstComponent,
//         ServiceOrderPieChartComponent,ServicesLineChartComponent,TimelineComponent ],
//       providers: [{ provide: BpaService, useFactory: bpaServiceStub,forkJoin },HttpClient, HttpHandler],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DashboardComponent);
//     component = fixture.componentInstance;
//     service = TestBed.get(BpaService);
//     fixture.detectChanges();
//   });

//   it('Should Create', () => {
//     expect(component).toBeTruthy();
//   });

//   it ('should switch tabs',() => {
//     component.fnTimelineTabClick('in-process');
//     var res = component.filterlist;
//     expect(res).toBeTruthy();
//   });

//   // it('should call D3 chart',() => {
//   //   spyOn(component,'fnd3chart').and.callThrough();
//   //   component.ngOnInit();
//   //   expect(component.finalCount).toBeDefined();
//   // })

//   describe("ngOnInit", () => {
//     it("makes expected calls", () => {
//     const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
//     BpaService
//     );
//     spyOn(bpaServiceStub, "getServiceItems").and.callThrough();
//     spyOn(bpaServiceStub, "getServiceorders").and.callThrough();
//     component.ngOnInit();
//     expect(component.chartDash).toBeDefined();
//     expect(component.chart1dash).toBeDefined();
//     });
//     });

// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { BpaService } from 'src/app/service/bpa.service';
import { D3ZoomableSunburstComponent } from '../utils/d3-zoomable-sunburst/d3-zoomable-sunburst.component';
import { ServicesLineChartComponent } from '../utils/services-line-chart/services-line-chart.component';
import { ServiceOrderPieChartComponent } from '../utils/service-order-pie-chart/service-order-pie-chart.component';
import { TimelineComponent } from '../utils/timeline/timeline.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, from } from 'rxjs';

var serviceorders = [
      {
        formData: [
          {
            crq: "CRQ111111111135"
          }
        ],
        orderNumber: 191,
        item: "Common Service CEWA",
        createdAt: "2020-03-13T05:52:02.897Z",
        updatedAt: "2020-03-13T05:52:03.834Z",
        status: "In-process",
      },
      {
        formData: [
          {
            crq: "CRQ123456789012"
          }
        ],
        orderNumber: 199,
        item: "Branch Modify Switch Configuration",
        createdAt: "2020-03-18T01:52:33.957Z",
        status: "Rollback-In-Process",
      },
      {
        formData: [
          {
            crq: "CRQ123456789012"
          }
        ],
        orderNumber: 198,
        item: "Branch Modify Switch Configuration",
        createdAt: "2020-03-17T06:19:11.665Z",
        status: "Rollback",
      },
      {
        formData: [
          {
            crq: "CRQ123456789012"
          }
        ],
        orderNumber: 196,
        item: "Branch Modify Switch Configuration",
        createdAt: "2020-03-17T05:20:32.835Z",
        status: "Complete",
      }
    ];
  
    var serviceitem = [
      {
        name: "Refresh Cisco IP Phone",
        categoryIds : [
        {name: 'Collaboration Services'}]
      },
      {
        name: "Enterprise IDE Switch Provisioning",
        categoryIds: [
          {name: 'Enterprise Services'}]
      },             
      {
        name: "Link Route Away/Restore Management",
        categoryIds: [
          {name: 'Core Services'}]
      },
      {
        name: "Common Service - Global Configuration v1.0.0",
        categoryIds: [
          {name: 'Common Services'}]
      },
      {
        name: "B2B PSK Rotation",
        categoryIds: [
          {name: 'DMZ Services'}]
      },
      {
        name: "Data Center Modify Switch Config",
        categoryIds: [
          {name: 'Data Center Services'}]
      },
      {
        name: "Branch Router Provisioning",
        categoryIds: [
          {name: 'Branch Services'}]
      }
    ];

class BpaServiceStub {
  fnFetchBroadcastMessage() {
  return from([{ broadcastMessage: 'i am another message'}]) 
  } 
  fnUpdateBroadcastMessage() {
  return from([{ broadcastMessage: 'i am sending success'}]) 
  }
  getServiceorders() {
  return from([{'body': serviceorders }]) 
  } 
  getServiceItems() {
  return from([{'body': serviceitem }]) 
  } 
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ DashboardComponent,D3ZoomableSunburstComponent,ServiceOrderPieChartComponent,
    ServicesLineChartComponent,TimelineComponent ],
    providers: [ { provide: BpaService, useClass: BpaServiceStub}],
    schemas: [NO_ERRORS_SCHEMA]
    })
   .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.statuslist = ['COMPLETE', 'IN-PROCESS', 'ROLLBACK'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should switch tabs',() => {
    component.fnTimelineTabClick('in-process');
    var res = component.filterlist;
    expect(res).toBeTruthy();
  });

  it('should call D3 chart',() => {
    spyOn(component,'fnd3chart').and.callThrough();
    component.ngOnInit();
    expect(component.finalCount).toBeDefined();
  })

  describe("ngOnInit", () => {
    it("makes expected calls", () => {
    const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
    BpaService
    );
    spyOn(bpaServiceStub, "getServiceItems").and.callThrough();
    spyOn(bpaServiceStub, "getServiceorders").and.callThrough();
    component.ngOnInit();
    expect(component.chartDash).toBeDefined();
    expect(component.chart1dash).toBeDefined();
    });
    });
});