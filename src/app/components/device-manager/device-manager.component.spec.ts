import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceManagerComponent } from './device-manager.component';
import { AgGridModule } from 'ag-grid-angular';
import { ModalComponent } from '../utils/modal/modal.component';
import { BpaService } from 'src/app/service/bpa.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NO_ERRORS_SCHEMA } from '@angular/core';




describe('DeviceManagerComponent', () => {
  let component: DeviceManagerComponent;
  let fixture: ComponentFixture<DeviceManagerComponent>;
  let service: BpaService;
  var device = {
    status: 'Success',
    msg: 'Fetching Successful',
    body: [{
      _id: '5e7cb01213c1900b70c0cca3',
      name: 'Ent-3560',
      description: 'physical_WS-C3560G-48TS',
      address: '10.122.32.204',
      port: '22',
      authgroup: 'enterprise_aaa',
      ned_id: 'cisco-ios-cli-6.38:cisco-ios-cli-6.38',
      protocol: 'ssh',
      latitude: '',
      longitude: '',
      controller_id: 'RTP-Core-1',
      sub_controller_id: 'nso5-lsa3-re',
    },
    {
      _id: '5e7cb01313c1900b70c0cca7',
      name: 'Ent-6509',
      description: 'physical_WS-C6509-E',
      address: '10.122.32.71',
      port: '22',
      authgroup: 'enterprise_local',
      ned_id: 'cisco-ios-cli-6.38:cisco-ios-cli-6.38',
      protocol: 'ssh',
      latitude: '',
      longitude: '',
      controller_id: 'RTP-Core-1',
      sub_controller_id: 'nso5-lsa3-re'
    }

    ]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceManagerComponent, ModalComponent],
      imports: [AgGridModule.withComponents([])],
      providers: [BpaService, HttpClient, HttpHandler],
      schemas : [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagerComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BpaService);
    fixture.detectChanges();
    
  });

  it('should create', () => {
    spyOn(service, 'getDeviceList').and.returnValues(device);
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should downlaod', () =>{
    expect(component.onBtnExport).toBeTruthy();
  });
});
