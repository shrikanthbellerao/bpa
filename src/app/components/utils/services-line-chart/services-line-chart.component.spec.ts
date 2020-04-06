import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should perform line chart function',() => {
  component['chartElements'] = [
    {
     categoryIds: [
        {name: "Collaboration Services"}
      ]
    },
    {
     categoryIds: [
        {name: "Core Services"}
      ]
    },
    {
     categoryIds: [
        {name: "DMZ Services"}
      ]
    },
    {
     categoryIds: [
        {name: "Common Services"}
      ]
    },
    {
     categoryIds: [
        {name: "Enterprise Services"}
      ]
    },
    {
     categoryIds: [
        {name: "Data Center Services"}
      ]
    },
    {
     categoryIds: [
        {name: "Branch Services"}
      ] 
    }
   ]
    expect(component.fnlinechart(component.chartElements)).toBeTruthy();
  });

  
});
