import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(private authService: AuthService, public adminService: AdminService) {}

  logout(): void {
    this.adminService.setAdminLoggedIn(false); // Set isAdminLoggedIn to false
    this.authService.logout();
  }
}
