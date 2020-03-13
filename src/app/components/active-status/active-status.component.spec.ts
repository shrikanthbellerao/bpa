import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStatusComponent } from './active-status.component';

describe('ActiveStatusComponent', () => {
  let component: ActiveStatusComponent;
  let fixture: ComponentFixture<ActiveStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
