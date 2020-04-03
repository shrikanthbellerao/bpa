import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BpaService } from "src/app/service/bpa.service";
import { ApplicationConfigComponent } from "./app-config.component";
import { FormsModule } from "@angular/forms";
import { LineScalePulseOutComponent } from "../utils/line-scale-pulse-out/line-scale-pulse-out.component";
import { throwError } from "rxjs";

describe("ApplicationConfigComponent", () => {
  let component: ApplicationConfigComponent;
  let fixture: ComponentFixture<ApplicationConfigComponent>;
  beforeEach(() => {
    const bpaServiceStub = () => ({
      fnFetchBroadcastMessage: () => ({
        subscribe: f => f({ broadcastMessage: "Fetching Broadcast message" })
      }),
      fnUpdateBroadcastMessage: broadcastMessage => ({
        subscribe: f => f({ broadcastMessage: "Updating Broadcast message" })
      })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ApplicationConfigComponent, LineScalePulseOutComponent],
      providers: [{ provide: BpaService, useFactory: bpaServiceStub }]
    });
    fixture = TestBed.createComponent(ApplicationConfigComponent);
    component = fixture.componentInstance;
  });
  it("can load instance", () => {
    expect(component).toBeTruthy();
  });
  it("can save broadcast messages", () => {
    const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
      BpaService
    );
    spyOn(bpaServiceStub, "fnFetchBroadcastMessage").and.callThrough();
    component.ngOnInit();
    expect(component.broadcastMessage).toEqual("Fetching Broadcast message");
  });
  it("can update broadcast messages", () => {
    const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
      BpaService
    );
    spyOn(bpaServiceStub, "fnUpdateBroadcastMessage").and.callThrough();
    component.fnSaveBroadcastMessage({
      value: { broadcastMessage: "Hello" }
    });
    expect(component.broadcastMessage).toEqual("Updating Broadcast message");
  });
  it("returns error while fetching broadcast", () => {
    const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
      BpaService
    );
    const errCall = spyOn(
      bpaServiceStub,
      "fnFetchBroadcastMessage"
    ).and.returnValue(throwError({ status: 404 }));
    component.ngOnInit();
    expect(component.broadcastMessage).toBeUndefined();
  });
  it("returns error while updating broadcast", () => {
    const bpaServiceStub: BpaService = fixture.debugElement.injector.get(
      BpaService
    );
    const errCall = spyOn(
      bpaServiceStub,
      "fnUpdateBroadcastMessage"
    ).and.returnValue(throwError({ status: 404 }));
    component.fnSaveBroadcastMessage({
      value: { broadcastMessage: "Hello" }
    });
    expect(component.startSpinner).toBeFalsy();
  });
});
