import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPiechart } from './Orderspiechart.component';

describe('Chart1Component', () => {
  let component: OrdersPiechart;
  let fixture: ComponentFixture<OrdersPiechart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPiechart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPiechart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
