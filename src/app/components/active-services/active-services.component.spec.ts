import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveServicesComponent } from './active-services.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BpaService } from 'src/app/service/bpa.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, from, Observable, throwError } from 'rxjs';
import { TimelineComponent } from '../utils/timeline/timeline.component';
class MockServiceStub {
getActiveServices() {
return from([{body: [{
    updatedAt: '2020-03-18T01:54:36.720Z',
    createdAt: '2020-03-18T01:52:33.957Z',
    Action: 'Create',
    userName: 'admin',
    processInstanceId: '22d7753b-68bb-11ea-838d-0242ac120008',
    description: 'Modify switch configuration service is initiated when commissioning the switch port configuration to turn up the port to allow connection to one of the following endpoints in Branch domain.',
    orderNumber: 199,
    formData: {
        crq: 'CRQ123456789012',
        nser: '12345678',
        pid: '123456',
        rollbackOperations: [
            {
                operation: 'update',
                serviceKey: 'Robot-SW-3650 GigabitEthernet 1/0/10',
                service: 'interface-cfs:interface-cfs'
            }
        ]
    },
    status: 'Rollback-In-Process'
}]}])
}
fnFormatDate() {
return '1/2/3'
}
getActions() {
return from([ {
body: [{
    updatedAt: '2020-03-18T01:52:44.639Z',
    createdAt: '2020-03-18T01:52:44.639Z',
    objectType: 'service-catalog-order',
    objectReference: '5e717ee14b975001362bc72a',
    milestone: 'Device Check-Sync',
    __v: 0,
    status: 'Complete'
},
{
    _id: '5e717ef2ab2d7e010498d423',
    updatedAt: '2020-03-18T01:52:50.843Z',
    createdAt: '2020-03-18T01:52:50.843Z',
    objectType: 'service-catalog-order',
    objectReference: '5e717ee14b975001362bc72a',
    milestone: 'Rollback Dryrun Review',
    __v: 0,
    execution: {
        type: 'dryrun',
        executionData: '5e717f3c14291b41f86493de',
        templateId: 'Dry-Run'
    },
    status: 'Complete'
}] 
} ])
}
setServiceOrderStatus() {
return true;
}
}
describe('ActiveServicesComponent', () => {
let component: ActiveServicesComponent;
let fixture: ComponentFixture<ActiveServicesComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ ActiveServicesComponent,TimelineComponent ],
imports: [
RouterTestingModule.withRoutes([
{ path: 'activeStatus', component: MockServiceStub }
])],
providers : [
{ provide: BpaService, useClass: MockServiceStub }
],
schemas: [NO_ERRORS_SCHEMA]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(ActiveServicesComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
it('should onGridReady', () => {
component.onGridReady({
api: {
sizeColumnsToFit:() => true,
resetRowHeights:() => true 
}
})
});
it('should onFirstDataRendered', () => {
component.onFirstDataRendered({
api: {
sizeColumnsToFit:() => true,
resetRowHeights:() => true 
}
})
});
it('should onViewBtnClick', () => {
component.onViewBtnClick({
rowData: {_id: '123456789'}
})
});
it('should buttonState if constion', () => {
component.selectedRowsNo = 2
component.buttonState();
});
it('should buttonState else constion', () => {
component.selectedRowsNo = 0
component.buttonState();
});
it('should onSelectionChanged', () => {
component['gridApi'] = {
getSelectedRows: () => [1,2,4]
}
component.onSelectionChanged();
});
it('should deselectRows', () => {
component['gridApi'] = {
deselectAll: () => [1,2,4]
}
component.deselectRows();
});
it('should onBtnExport', () => {
component['gridApi'] = {
exportDataAsCsv: () => [1,2,4]
}
component.onBtnExport();
});
it('should agGroupCellRenderer', () => { 
component.agGroupCellRenderer(null);
});
it('should ngOnInit', () => {
const service = TestBed.get(BpaService);
spyOn(service,'getActiveServices').and.callFake((res) => {
return throwError('api failed')
})
component.ngOnInit();
});
});
