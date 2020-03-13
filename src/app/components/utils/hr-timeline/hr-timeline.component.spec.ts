import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTimelineComponent } from './hr-timeline.component';

describe('HrTimelineComponent', () => {
  let component: HrTimelineComponent;
  let fixture: ComponentFixture<HrTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
