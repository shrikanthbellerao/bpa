import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TopnavComponent } from "./topnav.component";

describe("TopnavComponent", () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TopnavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("adminFlag defaults to: false", () => {
    expect(component.adminFlag).toEqual(false);
  });
  it("nonadminFlag defaults to: false", () => {
    expect(component.nonadminFlag).toEqual(false);
  });
  it("serviceCatalogFlg defaults to: false", () => {
    expect(component.serviceCatalogFlg).toEqual(false);
  });
});
