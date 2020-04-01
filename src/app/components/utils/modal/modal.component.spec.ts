import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { HorizontalTimelineComponent } from '../horizontal-timeline/horizontal-timeline.component';

describe('modelcomponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent,TimelineComponent,HorizontalTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component['modalConfig'] ={
        show: true,
        buttonList: ['primary']
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inilize the onit', () => {
    component.ngOnInit();
    expect(component.buttonListLength).toEqual(1);
  });

  it('should call hideModal', () => {
    component.hideModal();
    expect(component['modalConfig'].show).toBeFalsy();
  });
});
