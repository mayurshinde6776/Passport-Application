import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AdminService } from '../../Admin-Dashboard/admin.service';


@Component({
  selector: 'LoginComponent',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,private adminService: AdminService, private router: Router) { }

  login(): void {
    // Check if the entered username and password match the admin credentials
    if (this.username === 'admin' && this.password === 'admin') {
      // Set the isAdminLoggedIn flag in AdminService to indicate that admin is logged in
      this.adminService.setAdminLoggedIn(true);
      console.log('setAdminLoggedIn called with true');
      // Redirect to the admin dashboard
      this.router.navigate(['/admin-dashboard']);
    } else {
      // Call the login method of the AuthService with the entered username and password
      this.authService.login(this.username, this.password);
      // Retrieve the current user's username from the AuthService
      const currentUser = this.authService.getUsername();
      console.log("current user", currentUser);
      // Set the logged-in user's value to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
      // Redirect to the user homepage
      this.router.navigate(['/user-home']);
    }
  }
  
}
