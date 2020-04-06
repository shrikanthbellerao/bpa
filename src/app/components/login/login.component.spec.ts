import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { from, throwError } from 'rxjs';
import { BpaService } from 'src/app/service/bpa.service';
import { FormsModule } from '@angular/forms';
class MockServiceStub {
fnValidateLogin() {
return from([{body: { 'access_token': "aFDGASDASFYUDASD697SA6DVSADKUSARDAS75D87SA5D87SATDFASDSA" },'status': 'success'}])
} 
fnTestNodeApp() {
return from([ {} ])
}
}
describe('LoginComponent', () => {
let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ LoginComponent ],
imports: [
RouterTestingModule.withRoutes([
{ path: 'dashboard', component: MockServiceStub },
{ path: 'signup', component: MockServiceStub },
{ path: 'contactUs', component: MockServiceStub },
{ path: 'FAQ', component: MockServiceStub },
]),FormsModule],
providers : [
{ provide: BpaService, useClass: MockServiceStub }
],
schemas: [NO_ERRORS_SCHEMA]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(LoginComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
it('should fnValidateCredential FOR SUCCESS', () => {
let formData = {
value: {
userName: 'admin',
password: 'admin'
}
}
component.fnValidateCredential(formData,false)
});
it('should fnValidateCredential login fail', () => {
const service = TestBed.get(BpaService);
spyOn(service,'fnValidateLogin').and.callFake((res) => {
return from([{'status': 'fail'}])
})
let formData = {
value: {
userName: 'admin',
password: 'admin123'
}
}
component.fnValidateCredential(formData,true)
});
it('should fnValidateCredential login api fail', () => {
const service = TestBed.get(BpaService);
spyOn(service,'fnValidateLogin').and.callFake((res) => {
return throwError('api fail....')
})
let formData = {
value: {
userName: 'admin',
password: 'admin'
}
}
component.fnValidateCredential(formData,true)
});
it('should fnRegisterNewUser', () => {
component.fnRegisterNewUser();
});
it('should contactus', () => {
component.contactus();
});
it('should questions', () => {
component.questions();
});
it('should forGetPassword', () => {
component.forGetPassword();
});
});
