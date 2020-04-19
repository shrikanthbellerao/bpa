import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { D3ZoomableSunburstComponent } from './d3-zoomable-sunburst.component';

describe('D3ZoomableSunburstComponent', () => {
  let component: D3ZoomableSunburstComponent;
  let fixture: ComponentFixture<D3ZoomableSunburstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ D3ZoomableSunburstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ZoomableSunburstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
