import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { DeviceManagerComponent } from './components/device-manager/device-manager.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'card', component: ServiceCatalogComponent},
  {path:"deviceManager", component:DeviceManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
