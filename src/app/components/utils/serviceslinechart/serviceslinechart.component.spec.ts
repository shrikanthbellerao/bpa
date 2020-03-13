import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceslinechartComponent } from './serviceslinechart.component';

describe('ChartComponent', () => {
  let component: ServiceslinechartComponent;
  let fixture: ComponentFixture<ServiceslinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceslinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceslinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
