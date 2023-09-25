import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

// Define the User interface
export interface  User {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private username = '';
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  // Authenticate the user with the entered username and password
  authenticateUser(username: string, password: string): Observable<any> {
    return this.getUsersData().pipe(
      map((users: User[]) => {
        const matchedUser = users.find(user => user.username === username && user.password === password);
        return { success: !!matchedUser, user: matchedUser };
      })
    );
  }

  // Perform the login process for both user and admin
  login(username: string, password: string, isAdmin: boolean = false): void {
    // Call the authenticateUser method and subscribe to the authentication response
   // Call the authenticateUser method and subscribe to the authentication response
this.authenticateUser(username, password).subscribe(
  response => {
    // Check if authentication is successful
    if (response.success) {
      this.isAuthenticated = true;
      this.username = response.user.username;

      // Store the username in localStorage
      localStorage.setItem('username', this.username);

      if (isAdmin) {
        // Redirect the admin to the admin dashboard
        this.router.navigate(['/admin-dashboard']);
      } else {
        // Redirect the user to the home page with the user ID as a query parameter
        this.router.navigate(['/user-home'], { queryParams: { userId: response.user.id } });
      }
    } else {
      console.error('Invalid username or password');
    }
  },
  error => {
    console.error('Error authenticating user:', error);
  }
);

  }

  // Perform the logout process for both user and admin
  logout(): void {
    this.isAuthenticated = false;
    this.username = '';
    // Remove the stored username, password, and login status from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('isLoggedIN');
    // Redirect the user to the login page after logout
    this.router.navigate(['/login']);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Get the username of the authenticated user
 // Get the username of the authenticated user
getUsername(): string {
  // Retrieve the stored username from localStorage
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    // Return the stored username
    return storedUsername;
  } else {
    // If the username is not found in localStorage, return an empty string
    return '';
  }
}


  // Get the user data from the server
  getUsersData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  
  
  
}
