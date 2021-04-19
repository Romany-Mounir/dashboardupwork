import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ErrorPageComponent } from './pages/external/error-page/error-page.component';
import { ResetPaswordComponent } from './pages/external/reset-pasword/reset-pasword.component';
import { SigninComponent } from './pages/external/signin/signin.component';
import { SignupComponent } from './pages/external/signup/signup.component';
import { HelpComponent } from './pages/help/help.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
{path:'overview',component:OverviewComponent},
{path:'orders',component:OrdersComponent},
{path:'charts',component:ChartsComponent},
{path:'settings',component:SettingsComponent},
{path:'notifications',component:NotificationsComponent},
{path:'resetpassword',component:ResetPaswordComponent},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent},
{path:'myaccount',component:AccountComponent},
{path:'help',component:HelpComponent},
{ path: '',  redirectTo: '/overview', pathMatch: 'full' },
{path:'404error',component:ErrorPageComponent},
{path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
