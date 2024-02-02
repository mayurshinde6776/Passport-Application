import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponentComponent } from './UI-components/home-component/home-component.component';
import { AboutComponentComponent } from './UI-components/about-component/about-component.component';
import { ContactComponentComponent } from './UI-components/contact-component/contact-component.component';


import {  SignupComponent } from './UI-components/signup-component/signup-component.component';
 import { LoginComponent } from './UI-components/login-component/login-component.component';
import { StepsComponentComponent } from './UI-components/steps-component/steps-component.component';
import { LandingPageComponentComponent } from './UI-components/landing-page-component/landing-page-component.component';
import { AuthGuard } from './auth.guard';
import { FreshPassportComponent } from './Form-Components/fresh-passport/fresh-passport.component';
import { ReIssuePassportComponent } from './Form-Components/re-issue-passport/re-issue-passport.component';
import { AdminDashboardComponent } from './Admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from './Admin-Dashboard/admin-auth.guard';
import { AdminNavbarComponent } from './Admin-Dashboard/admin-navbar/admin-navbar.component';


const routes: Routes = [
  { path: 'landing', component: LandingPageComponentComponent },
  { path: 'user-home', component: HomeComponentComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'steps', component: StepsComponentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fresh-passport', component: FreshPassportComponent },
  { path: 're-issue-passport', component: ReIssuePassportComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminAuthGuard] },
  { path: '', redirectTo: '/landing', pathMatch: 'full' } //default route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
