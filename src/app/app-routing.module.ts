import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ActiveServicesComponent } from './components/utils/active-services/active-services.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path: "activeServices", component : ActiveServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
