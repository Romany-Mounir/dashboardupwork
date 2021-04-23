import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AccountComponent } from './pages/account/account.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ErrorPageComponent } from './pages/external/error-page/error-page.component';
import { ResetPaswordComponent } from './pages/external/reset-pasword/reset-pasword.component';
import { SigninComponent } from './pages/external/signin/signin.component';
import { SignupComponent } from './pages/external/signup/signup.component';
import { Signup2Component } from './pages/signup2/signup2.component';
import { HelpComponent } from './pages/help/help.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SpecialaccountComponent } from './pages/specialaccount/specialaccount.component';
import { ResetpassformComponent } from './pages/resetpassform/resetpassform.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'charts', component: ChartsComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'resetpassword', component: ResetPaswordComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'myaccount', component: AccountComponent },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: '404error', component: ErrorPageComponent, canActivate: [AuthGuard] },
  { path: 'create', component: Signup2Component },
  { path: 'list-admins', component: AccountComponent },
  { path: 'update-admin/:id', component: SignupComponent },
  { path: 'myprofile', component: SpecialaccountComponent },
  { path: 'restform', component: ResetpassformComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/404error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
