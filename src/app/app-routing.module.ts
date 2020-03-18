import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { ActiveServicesComponent } from "./components/active-services/active-services.component";
import { SignupComponent } from "./components/utils/signup/signup.component";
import { ServiceCatalogComponent } from "./components/service-catalog/service-catalog.component";
import { DeviceManagerComponent } from "./components/device-manager/device-manager.component";
import { ManageRolesComponent } from "./components/manage-roles/manage-roles.component";
import { ApplicationConfigComponent } from "./components/app-config/app-config.component";
import { UserRegistrationComponent } from "./components/user-registration/user-registration.component";
import { MyProfileComponent } from "./components/my-profile/my-profile.component";
import { FAQComponent } from "./components/faq/faq.component";
import { ResetPswdComponent } from "./components/reset-pswd/reset-pswd.component";
<<<<<<< HEAD
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
=======
import { ActiveStatusComponent } from './components/active-status/active-status.component';
>>>>>>> 9f89de9d390c9896ada73ed6c06759e148c970f7

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "signup", component: SignupComponent },
  { path: "services", component: ServiceCatalogComponent },
  { path: "deviceManager", component: DeviceManagerComponent },
  { path: "manageRoles", component: ManageRolesComponent },
  { path: "appConfig", component: ApplicationConfigComponent },
  { path: "reviewRequest", component: UserRegistrationComponent },
  { path: "myProfile", component: MyProfileComponent },
  { path: "FAQ", component: FAQComponent },
  { path: "resetPassword", component: ResetPswdComponent },
  { path: "activeServices", component: ActiveServicesComponent },
  { path: "deviceManager", component: DeviceManagerComponent },
<<<<<<< HEAD
  { path: "contact-us", component: ContactUsComponent}
=======
  { path: "activeStatus", component: ActiveStatusComponent }
>>>>>>> 9f89de9d390c9896ada73ed6c06759e148c970f7
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
