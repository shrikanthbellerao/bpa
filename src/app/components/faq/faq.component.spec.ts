import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BpaService } from 'src/app/service/bpa.service';
import { FAQComponent } from './faq.component';
import { from} from 'rxjs';
// import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';
// var qna= [ 
  
//   {
//     _id:"5e7f4d4f1c9d4400004e2bde",question:"Supported Browsers?",answer:"Chrome, Firefox, Safari"}];
  //   {
  //     _id:"5e7f4d9a1c9d4400004e2bdf",question:"What is BPA?",answer:"Business Process Automation (BPA) addresses customer challenges with configuration change management with an innovative, scalable, microservices based platform with an embedded workflow engine that is standards based. BPA is pre-integrated with NSO but with its modular architecture, BPA can easily integrate with other controllers to orchestrate change across multiple domains."},
  //   {
  //     id:"5e7f4dd91c9d4400004e2be0",question:"Benefits of BPA?",answer:"Reduces time to deliver new services Minimizes capital and operational expenditure Improves availability, capacity, and scalability of networks Improves operational security through consistent and automated configuration"
// }];
   


      // let qnaitems = Object.keys(qna);
      // let goodqna = [];
      // for (item of qnaitems) { 
      //   goodqna.push(qna[item]);
    // }
    // class BpaServiceStub {
    //   getFaq() {
    //   return from([{ 'body': qna}])
    //     }
    // }
  



describe('FAQComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;
  let service: BpaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQComponent ],
      // providers : [
      //   { provide: BpaService, useClass:BpaServiceStub }
        // ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BpaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display faq', () => {
    expect(component).toBeTruthy();
  });

});
