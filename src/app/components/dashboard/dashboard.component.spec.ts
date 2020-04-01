import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { D3ZoomableSunburstComponent } from '../utils/d3-zoomable-sunburst/d3-zoomable-sunburst.component';
import { ServiceOrderPieChartComponent } from '../utils/service-order-pie-chart/service-order-pie-chart.component';
import { ServicesLineChartComponent } from '../utils/services-line-chart/services-line-chart.component';
import { TimelineComponent } from '../utils/timeline/timeline.component';
import { BpaService } from 'src/app/service/bpa.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,D3ZoomableSunburstComponent,
        ServiceOrderPieChartComponent,ServicesLineChartComponent,TimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return real value from the real service',() => {
  //   component = new DashboardComponent(new BpaService(new HttpClient));
  //   expect(DashboardComponent.chart1dash)
  // })
});
