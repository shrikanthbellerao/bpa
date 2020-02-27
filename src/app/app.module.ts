import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPopper } from 'angular-popper';

import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TimelineComponent } from './components/utils/timeline/timeline.component';
import { ChartComponent } from './components/utils/chart/chart.component';
import { Chart1Component } from './components/utils/chart1/chart1.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CollapsibleComponent,
    SpinnerComponent,
    TimelineComponent,
    ChartComponent,
    Chart1Component,
    TooltipComponent,
    ProgressbarComponent,
    ButtonComponent,
    DropdownComponent,
    TabComponent,
    LineScalePulseOutComponent,
    CardsComponent,
    TooltipComponent,
    ProgressbarComponent,
    ModalComponent,
    ServiceCatalogComponent,
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
      progressBar:true,
      progressAnimation:'decreasing',
      timeOut: 10000,
      positionClass: 'toast-top-right',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
