import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { ServiceOrderPieChartComponent } from './service-order-pie-chart.component';
import { BpaService } from 'src/app/service/bpa.service';

describe('ServiceOrderPieChartComponent', () => {
  let component: ServiceOrderPieChartComponent;
  let fixture: ComponentFixture<ServiceOrderPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [ ServiceOrderPieChartComponent ],
      providers: [ { provide: BpaService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should implement ngOninit', () => {
    component.ngOnInit();
  });

  it('should implement Pie chart', () => {
    var res = component.fnpiechart([{status: 'Complete'},{status: 'Rollback'},{status: 'Rollback-In-Process'},{status: 'In-Process'},{status: 'Cancelled'}]);
    expect(res).toBeDefined();
  })

});


