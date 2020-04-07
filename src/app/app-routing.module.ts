import { NgModule } from "@angular/core";
import { ChartsModule } from 'ng2-charts';
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
import { ForgotPswdComponent } from "./components/forgot-pswd/forgot-pswd.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { ActiveStatusComponent } from './components/active-status/active-status.component';
import { DynamicLoadingComponent } from './components/utils/dynamic-loading/dynamic-loading.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "signup", component: SignupComponent },
  { path: "services", component: ServiceCatalogComponent },
  { path: "deviceManager", component: DeviceManagerComponent },
  { path: "appConfig", component: ApplicationConfigComponent },
  { path: "myProfile", component: MyProfileComponent },
  { path: "FAQ", component: FAQComponent },
  { path: "forgotPassword", component: ForgotPswdComponent },
  { path: "activeServices", component: ActiveServicesComponent },
  { path: "deviceManager", component: DeviceManagerComponent },
  { path: "contactUs", component: ContactUsComponent},
  { path: "activeStatus", component: ActiveStatusComponent },
  { path: "dynamic", component: DynamicLoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
