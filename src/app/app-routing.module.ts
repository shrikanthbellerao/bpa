import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/utils/signup/signup.component";
import { ServiceCatalogComponent } from "./components/service-catalog/service-catalog.component";
import { DeviceManagerComponent } from "./components/device-manager/device-manager.component";
import { RolesComponent } from "./components/utils/roles/roles.component";
import { BroadcastComponent } from "./components/utils/broadcast/broadcast.component";
import { RequestComponent } from "./components/utils/request/request.component";
import { ProfileComponent } from "./components/utils/profile/profile.component";
import { FAQComponent } from "./components/utils/faq/faq.component";
import { ResetPswdComponent } from "./components/utils/reset-pswd/reset-pswd.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "signup", component: SignupComponent },
  { path: "Services", component: ServiceCatalogComponent },
  { path: "deviceManager", component: DeviceManagerComponent },
  { path: "ManageRoles", component: RolesComponent },
  { path: "BroadcastMessage", component: BroadcastComponent },
  { path: "ReviewRequest", component: RequestComponent },
  { path: "MyProfile", component: ProfileComponent },
  { path: "FAQ", component: FAQComponent },
  { path: "ResetPassword", component: ResetPswdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
