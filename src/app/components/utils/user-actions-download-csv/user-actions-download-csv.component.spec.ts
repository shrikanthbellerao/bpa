import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionsDownloadCsvComponent } from './user-actions-download-csv.component';

describe('UserActionsDownloadCsvComponent', () => {
  let component: UserActionsDownloadCsvComponent;
  let fixture: ComponentFixture<UserActionsDownloadCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserActionsDownloadCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionsDownloadCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
