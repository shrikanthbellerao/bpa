import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPopper } from 'angular-popper';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TimelineComponent } from './components/utils/timeline/timeline.component';
import { ServicesLineChartComponent } from './components/utils/services-line-chart/services-line-chart.component';
import { ServiceOrderPieChartComponent } from './components/utils/service-order-pie-chart/service-order-pie-chart.component';
import { ButtonComponent } from './components/utils/button/button.component';
import { DropdownComponent } from './components/utils/dropdown/dropdown.component';
import { TooltipComponent } from './components/utils/tooltip/tooltip.component';
import { ProgressbarComponent } from './components/utils/progressbar/progressbar.component';
import { CollapsibleComponent } from './components/utils/collapsible/collapsible.component';
import { TabComponent } from './components/utils/tab/tab.component';
import { LineScalePulseOutComponent } from './components/utils/line-scale-pulse-out/line-scale-pulse-out.component';
import { CardsComponent } from './components/utils/cards/cards.component';
import { ModalComponent } from './components/utils/modal/modal.component';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { SwitchComponent } from './components/utils/switch/switch.component';
import { SignupComponent } from './components/utils/signup/signup.component';
import { ArchwizardModule } from 'angular-archwizard';
import { ActiveServicesComponent } from './components/active-services/active-services.component';
import { DeviceManagerComponent } from './components/device-manager/device-manager.component';
import { UserActionsIconDeviceManagerComponent } from './components/utils/user-actions-icon-device-manager/user-actions-icon-device-manager.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageRolesComponent } from './components/manage-roles/manage-roles.component';
import { ApplicationConfigComponent } from './components/app-config/app-config.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { FAQComponent } from './components/faq/faq.component';
import {ResetPswdComponent} from './components/reset-pswd/reset-pswd.component';
import { D3SpiralStackedBarComponent } from './components/utils/d3-spiral-stacked-bar/d3-spiral-stacked-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ActiveStatusComponent } from './components/active-status/active-status.component';
import { UserActionsDownloadCsvComponent } from './components/utils/user-actions-download-csv/user-actions-download-csv.component';
import { EllipsifyMeDirective } from './components/utils/ellipsify-me.directive';
import { UserActionIconActiveServicesComponent } from './components/utils/user-action-icon-active-services/user-action-icon-active-services.component';
import { HorizontalTimelineComponent } from './components/utils/horizontal-timeline/horizontal-timeline.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CollapsibleComponent,
    TimelineComponent,
    ServicesLineChartComponent,
    ServiceOrderPieChartComponent,
    TooltipComponent,
    ProgressbarComponent,
    ButtonComponent,
    DropdownComponent,
    TabComponent,
    LineScalePulseOutComponent,
    CardsComponent,
    ModalComponent,
    ServiceCatalogComponent,
    SwitchComponent,
    SignupComponent,
    ActiveServicesComponent,
    DeviceManagerComponent,
    UserActionsIconDeviceManagerComponent,
    ManageRolesComponent,
    ApplicationConfigComponent,
    UserRegistrationComponent,
    MyProfileComponent,
    FAQComponent,
    ResetPswdComponent,
    TopnavComponent,
    FooterComponent,
    D3SpiralStackedBarComponent,
    ContactUsComponent,
    
    ActiveStatusComponent,
    EllipsifyMeDirective,
    UserActionIconActiveServicesComponent,
    HorizontalTimelineComponent,
    UserActionsDownloadCsvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AngularFontAwesomeModule,
    NgxPopper,
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'decreasing',
      timeOut: 10000,
      positionClass: 'toast-top-right',
    }),
    UiSwitchModule,
    ArchwizardModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  entryComponents : [UserActionsIconDeviceManagerComponent, UserActionsDownloadCsvComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
