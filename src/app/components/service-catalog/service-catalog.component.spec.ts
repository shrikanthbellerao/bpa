import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCatalogComponent } from './service-catalog.component';
import { FormsModule } from '@angular/forms';
import { BpaService } from 'src/app/service/bpa.service';
import { from,throwError} from 'rxjs';
import { UiSwitchComponent } from 'ngx-ui-switch';
import { CardsComponent } from '../utils/cards/cards.component';
import { RouterTestingModule } from '@angular/router/testing';

var service_record = [
  {
    "_id": "5e43a666de78ef018a9948c4",
    "name": "Refresh Cisco IP Phone",
    "description": "Refresh Cisco IP Phone",
    "tags": [
      {
        "name": "collaboration",
        "_id": "5e43a65bbd8c99413348ceb4"
      }
    ],
    "categoryIds": [
      {
        "description": "Services to update and add collaboration features",
        "_id": "5e43a65d0a5e10018ff9cc07",
        "name": "Collaboration Services",

      }
    ]
  },
  {
    "_id": "5e43a66c0a5e10018ff9cc0b",
    "name": "Link Route Away/Restore Management",
    "description": "This service provides core link route away and route restore operations.",

    "tags": [
      {
        "name": "core service",
        "_id": "5e43a65bbd8c99413348ceb5"
      }
    ],
    "categoryIds": [
      {
        "description": "Core Services",
        "_id": "5e43a65dde78ef018a9948c1",
        "name": "Core Services",
      }
    ]
  },
  {
    "_id": "5e43a66ede78ef018a9948c6",
    "name": "Node Route Away/Restore Management",
    "description": "This service provides core node route away and route restore operations.",
    "tags": [
      {
        "name": "core service",
        "_id": "5e43a65bbd8c99413348ceb5"
      }
    ],
    "categoryIds": [
      {
        "description": "Core Services",
        "_id": "5e43a65dde78ef018a9948c1",
        "name": "Core Services",
      }
    ]
  },
  {
    "_id": "5e43a6700a5e10018ff9cc0c",
    "name": "MACSec Enable Disable Service",
    "description": "This service provides core MACSec Enable Disable operations.",
    "tags": [
      {
        "name": "core service",
        "_id": "5e43a65bbd8c99413348ceb5"
      }
    ],
    "categoryIds": [
      {
        "description": "Core Services",
        "_id": "5e43a65dde78ef018a9948c1",
        "name": "Core Services",
      }
    ]
  },
  {
    "_id": "5e43a678de78ef018a9948c8",
    "name": "B2B PSK Rotation",
    "description": "This service will facilitate PSK key rotation for the B2B MeetMe IPSec tunnels.",
    "tags": [
      {
        "name": "dmz",
        "_id": "5e43a65bbd8c99413348ceb8"
      }
    ],
    "categoryIds": [
      {
        "description": "DMZ Services",
        "_id": "5e43a65d0a5e10018ff9cc09",
        "name": "DMZ Services",
      }
    ]
  }
];

var category_record = [
  {
    "_id": "5e43a65d0a5e10018ff9cc06",
    "updatedAt": "2020-02-12T07:16:45.595Z",
    "createdAt": "2020-02-12T07:16:45.595Z",
    "name": "Enterprise Services",
    "description": "Enterprise Services",
    "__v": 0,
    "status": "Active",
    "parentId": "0"
  },
  {
    "_id": "5e43a65dde78ef018a9948c1",
    "updatedAt": "2020-02-12T07:16:45.634Z",
    "createdAt": "2020-02-12T07:16:45.634Z",
    "name": "Core Services",
    "description": "Core Services",
    "__v": 0,
    "status": "Active",
    "parentId": "0"
  },
  {
    "_id": "5e43a65d0a5e10018ff9cc07",
    "updatedAt": "2020-02-12T07:16:45.674Z",
    "createdAt": "2020-02-12T07:16:45.674Z",
    "name": "Collaboration Services",
    "description": "Services to update and add collaboration features",
    "__v": 0,
    "status": "Active",
    "parentId": "0"
  },
  {
    "_id": "5e43a65dde78ef018a9948c2",
    "updatedAt": "2020-02-12T07:16:45.731Z",
    "createdAt": "2020-02-12T07:16:45.731Z",
    "name": "Branch Services",
    "description": "Branch Services",
    "__v": 0,
    "status": "Active",
    "parentId": "0"
  },
  {
    "_id": "5e43a65d0a5e10018ff9cc08",
    "updatedAt": "2020-02-12T07:16:45.754Z",
    "createdAt": "2020-02-12T07:16:45.754Z",
    "name": "Common Services",
    "description": "Common Services",
    "__v": 0,
    "status": "Active",
    "parentId": "0"
  }];

// import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
class BpaServiceStub {
  getServiceItems() {
    return from([{ 'body': service_record }])
  }
  getServiceCategory() {
    return from([{ 'body': category_record }])
  }
  selectFavourite() {
    return from([{ 'body': [{ status: 'success' }] }])
  }
  deleteFavourite() {
    return from([{ 'body': [{ name: 'one', categoryIds: [{ name: "name" }] }] }])
  }
}
describe('ServiceCatalogComponent', () => {
  let component: ServiceCatalogComponent;
  let fixture: ComponentFixture<ServiceCatalogComponent>;
  let service: BpaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ServiceCatalogComponent, UiSwitchComponent, CardsComponent],
      imports: [FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'dynamic', component: BpaServiceStub }
          ])],
      providers: [
        { provide: BpaService, useClass: BpaServiceStub }
      ],

    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatalogComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BpaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    });
    it('should call callApis', () => {
    component.callApis();
    expect(component.storeResponse[0]._id).toEqual('5e43a666de78ef018a9948c4')
    });
    it('should order navigate to ', () => {
    component.order(null);
    });
    it('should getCheck to get fileter data ', () => {
    component.storeIndex = [];
    component.Response = [{name: 'one',categoryIds: [ {name: "one" },{name: "two" }]}];
    component.getCheck(0);
    });
    it('should getCheck to get fileter data ', () => {
    component.storeIndex = [];
    component.favourite = true;
    component.Response = [{name: 'one',categoryIds: [ {name: "one" },{name: "two" }]}];
    component.getCheck(0);
    });
    it('should getCheck to get filter data else condition ', () => {
    component.favourite = true;
    component.storeIndex = [0];
    component.Response = [{name: 'one',categoryIds: [ {name: "one" },{name: "two" }]}];
    component.getCheck(0);
    });
    it('should getsearch', () => { 
    //spyOn(component,'getCheck').and.callThrough();
    component.getsearch('one');
    });
    it('should selectFavourite', () => { 
    component.selectFavourite({_id:'1232131j3k1'});
    });
    it('should deleteFavourite', () => { 
    component.deleteFavourite({_id:'1232131j3k1'});
    });
    it('should getFav', () => { 
    component.getFav('catalog');
    });
    });