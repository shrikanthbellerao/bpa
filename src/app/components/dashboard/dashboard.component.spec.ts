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