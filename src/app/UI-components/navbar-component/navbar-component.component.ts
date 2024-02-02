import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AdminService } from 'src/app/Admin-Dashboard/admin.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {
  constructor(private authService: AuthService, public adminService: AdminService) {}

  logout(): void {
    localStorage.removeItem("isLoggedIN");
    this.authService.logout();
  }
}
