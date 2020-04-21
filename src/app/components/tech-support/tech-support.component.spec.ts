import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BpaService } from 'src/app/service/bpa.service';
import { TechSupportComponent } from './tech-support.component';
import { throwError } from "rxjs";

describe('TechSupportComponent', () => {
  let component: TechSupportComponent;
  let fixture: ComponentFixture<TechSupportComponent>;
  beforeEach(() => {
    const bpaServiceStub = () => ({
      fnFetchSupportDetails: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      declarations: [TechSupportComponent],
      providers: [{ provide: BpaService, useFactory: bpaServiceStub }]
    });
    fixture = TestBed.createComponent(TechSupportComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
        BpaService
      );
      spyOn(bpaServiceStub, 'fnFetchSupportDetails').and.callThrough();
      component.ngOnInit();
      expect(bpaServiceStub.fnFetchSupportDetails).toHaveBeenCalled();
      expect(component.supportDetails).toBeDefined();
    });
    it("returns error while fetching support details", () => {
      const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
        BpaService
      );
      const errCall = spyOn(
        bpaServiceStub,
        "fnFetchSupportDetails"
      ).and.returnValue(throwError({ status: 404 }));
      component.ngOnInit();
      expect(component.supportDetails).toBeUndefined();
    });
  });
});
