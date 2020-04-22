import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let mockRouter;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dynamic'}
          ])],
    declarations: [ CardsComponent ],
    providers: [
        { provide: Router, 
          useValue: mockRouter},
	]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockRouter = {
        navigate: jasmine.createSpy('navigate')
      };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should call order function',() => {
//     const id= null;
//     component.order(id);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/dynamic']);
//   });

  it('should raise addFav event when calling selectFavourite function',()=>{
    let id=null;
    component.addFav.subscribe(x=>id=x);
    component.selectFavourite(1);
    expect(id).toBe(1);
});

it('should raise deleteFav event when calling deleteFavourite function',()=>{
    let id=null;
    component.deleteFav.subscribe(x=>id=x);
    component.deleteFavourite(1);
    expect(id).toBe(1);
});
it('should order navigate to ', () => {
  component.order(null);
  });
});