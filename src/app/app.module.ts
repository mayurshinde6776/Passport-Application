import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HomeComponentComponent } from './UI-components/home-component/home-component.component';
import { AboutComponentComponent } from './UI-components/about-component/about-component.component';
import { ContactComponentComponent } from './UI-components/contact-component/contact-component.component';

import { NavbarComponentComponent } from './UI-components/navbar-component/navbar-component.component';

import { SignupComponent } from './UI-components/signup-component/signup-component.component';
import { LoginComponent } from './UI-components/login-component/login-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StepsComponentComponent } from './UI-components/steps-component/steps-component.component';
import { LandingPageComponentComponent } from './UI-components/landing-page-component/landing-page-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';
import { FreshPassportComponent } from './Form-Components/fresh-passport/fresh-passport.component';
import { ReIssuePassportComponent } from './Form-Components/re-issue-passport/re-issue-passport.component';
import { AdminDashboardComponent } from './Admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './Admin-Dashboard/admin-navbar/admin-navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
  
    NavbarComponentComponent,
    SignupComponent,
     LoginComponent,
    StepsComponentComponent,
    LandingPageComponentComponent,
    FreshPassportComponent,
    ReIssuePassportComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
 
  providers: [
    SessionStorageService,
    // Other providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
