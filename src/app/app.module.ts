import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResetPaswordComponent } from './pages/external/reset-pasword/reset-pasword.component';
import { ErrorPageComponent } from './pages/external/error-page/error-page.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { DocsComponent } from './pages/docs/docs.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HelpComponent } from './pages/help/help.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';

import { SigninComponent } from './pages/external/signin/signin.component';
import { SignupComponent } from './pages/external/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SecurityComponent } from './components/security/security.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SigninComponent,
    SignupComponent,
    ResetPaswordComponent,
    ErrorPageComponent,
    OverviewComponent,
    DocsComponent,
    OrdersComponent,
    ChartsComponent,
    HelpComponent,
    NotificationsComponent,
    SettingsComponent,
    AccountComponent,
    NotificationComponent,
    ProfileComponent,
    PreferencesComponent,
    SecurityComponent,
    PaymentMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
