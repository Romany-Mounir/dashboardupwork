import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { SigninComponent } from './pages/external/signin/signin/signin.component';
import { SignupComponent } from './pages/external/signup/signup/signup.component';
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
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
