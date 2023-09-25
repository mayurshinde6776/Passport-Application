import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../.././user-list';
import { AuthService } from 'src/app/auth.service';
import { AdminService } from 'src/app/Admin-Dashboard/admin.service';
import {FormService} from '../../form.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  userList: UserList[] = [];
  userStatus: string = ''; // Add this line to declare the userStatus property
  user: any;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private adminService: AdminService, private FormService: FormService) { } // Add authService to the constructor

  ngOnInit() {
    this.fetchUserList();
  }

  fetchUserList() {
    this.http.get<UserList[]>('http://localhost:3000/users').subscribe(
      (data: UserList[]) => {
        this.userList = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  updateType(type: string): void {
    const loggedInUsername = localStorage.getItem('loggedInUser');
    console.log(loggedInUsername);
    
    if (!loggedInUsername) {
      // Handle the case when loggedInUser is not found in localStorage
      console.error('Logged-in user not found in localStorage');
      return;
    }
  
    // Update the type for the logged-in user
    const updatedUser = { username: loggedInUsername, type: type };
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
  
    if (type === 'fresh passport') {
      this.router.navigate(['/fresh-passport']);
    } else if (type === 're-issue passport') {
      this.router.navigate(['/re-issue-passport']);
    }
  }

  

  checkStatus() {
    const loggedInUsername = this.authService.getUsername(); // Retrieve the username of the logged-in user from the AuthService
    this.http.get<any[]>(`http://localhost:3000/users?username=${loggedInUsername}`).subscribe(
      (data: any[]) => {
        const user = data[0];
        if (user) {
          this.userStatus = user.status;
          console.log("status", this.userStatus);
        } else {
          console.log("User not found");
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
