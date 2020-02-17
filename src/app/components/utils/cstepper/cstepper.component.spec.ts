import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstepperComponent } from './cstepper.component';

describe('CstepperComponent', () => {
  let component: CstepperComponent;
  let fixture: ComponentFixture<CstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
