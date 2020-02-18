import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineScalePulseOutComponent } from './line-scale-pulse-out.component';

describe('LineScalePulseOutComponent', () => {
  let component: LineScalePulseOutComponent;
  let fixture: ComponentFixture<LineScalePulseOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineScalePulseOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineScalePulseOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
