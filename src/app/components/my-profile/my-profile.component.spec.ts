import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BpaService } from "src/app/service/bpa.service";
import { MyProfileComponent } from "./my-profile.component";
import { throwError } from "rxjs";

describe("MyProfileComponent", () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;
  beforeEach(() => {
    const bpaServiceStub = () => ({
      fnFetchAdminDetails: () => ({ subscribe: f => f({}) }),
      fnFetchDemoDetails: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      declarations: [MyProfileComponent],
      providers: [{ provide: BpaService, useFactory: bpaServiceStub }]
    });
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
  });
  it("can load instance", () => {
    expect(component).toBeTruthy();
  });
  describe("ngOnInit", () => {
    it("makes expected calls", () => {
      const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
        BpaService
      );
      spyOn(bpaServiceStub, "fnFetchAdminDetails").and.callThrough();
      spyOn(bpaServiceStub, "fnFetchDemoDetails").and.callThrough();
      component.ngOnInit();
      expect(component.adminDetails).toBeDefined();
      expect(component.demoDetails).toBeDefined();
    });
    it("returns error while fetching admin details", () => {
      const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
        BpaService
      );
      const errCall = spyOn(
        bpaServiceStub,
        "fnFetchAdminDetails"
      ).and.returnValue(throwError({ status: 404 }));
      component.ngOnInit();
      expect(component.adminDetails).toBeUndefined();
    });
    it("returns error while fetching demo user details", () => {
      const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
        BpaService
      );
      const errCall = spyOn(
        bpaServiceStub,
        "fnFetchDemoDetails"
      ).and.returnValue(throwError({ status: 404 }));
      component.ngOnInit();
      expect(component.demoDetails).toBeUndefined();
    });
  });
});
