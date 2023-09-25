import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../Admin-Dashboard/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private adminService: AdminService) {}

  canActivate(): boolean {
    if (this.adminService.isAdminLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
