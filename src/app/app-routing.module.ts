import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ActiveServicesComponent } from './components/utils/active-services/active-services.component';
import { SignupComponent } from './components/utils/signup/signup.component';
import { CardsComponent } from './components/utils/cards/cards.component';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { DeviceManagerComponent } from './components/device-manager/device-manager.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path: "activeServices", component : ActiveServicesComponent},
  {path:"signup",component:SignupComponent},
  {path:'cards', component: ServiceCatalogComponent},
  {path:"deviceManager", component:DeviceManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
