import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'chart.js' ;
import { ServicesLineChartComponent } from './services-line-chart.component';

describe('ChartComponent', () => {
  let component: ServicesLineChartComponent; 
  let fixture: ComponentFixture<ServicesLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize on ngonit', () => {
  //   component.ngOnInit();
  //   expect(component.chartElements).toBeTruthy();
  // })
});
