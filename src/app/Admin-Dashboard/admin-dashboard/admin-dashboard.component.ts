import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] | undefined;
  selectedUser: any | null = null; // Track the selected user for form details

  constructor(private authService: AuthService,private adminService: AdminService ,) { }

  ngOnInit(): void {
    
    // Fetch the users data from the adminService
    this.adminService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.log('Error occurred while fetching users:', error);
      }
    );

    // Fetch the passport details for the selected user
    this.viewFormDetails(this.selectedUser);
  }

  editUser(user: any): void {
    // Set the user's edit mode to true
    user.editMode = true;
  }

  cancelEdit(user: any): void {
    // Set the user's edit mode to false
    user.editMode = false;
  }

  saveUser(user: any): void {
    console.log(`Save user ${user.username}`);
    // Update the user data using the adminService
    this.adminService.updateUser(user.id, user).subscribe(
      updatedUser => {
        console.log('User updated successfully:', updatedUser);
        // Set the user's edit mode to false after successful update
        user.editMode = false;
      },
      error => {
        console.log('Error occurred while updating user:', error);
      }
    );
  }

  deleteUser(user: any): void {
    console.log(`Delete user ${user.username}`);
  
    // Delete the user from the first URL
    this.adminService.deleteUser(user.id).subscribe(
      () => {
        console.log(`User ${user.username} deleted successfully from the first URL`);
        // Remove the deleted user from the users array in the UI
        this.users = this.users?.filter(u => u.id !== user.id);
  
        // Delete the user from the second URL
        this.adminService.deletePassportDetails(user.id).subscribe(
          () => {
            console.log(`User ${user.username} deleted successfully from the second URL`);
          },
          error => {
            console.log('Error occurred while deleting passport details:', error);
          }
        );
      },
      error => {
        console.log('Error occurred while deleting user:', error);
      }
    );
  }
  
  updateStatus(user: any): void {
    console.log(`Update status for user ${user.username} to ${user.status}`);
    // Update the status of the user using the adminService
    this.adminService.updateUserStatus(user.id, user.status).subscribe(
      updatedUser => {
        console.log('Status updated successfully:', updatedUser);
      },
      error => {
        console.log('Error occurred while updating status:', error);
      }
    );
  }
  

  viewFormDetails(user: any): void {
    // Set the selected user for form details
    this.selectedUser = user;
  
    // Fetch the passport details for the selected user
    if (user) {
      this.adminService.getPassportDetails(user.id).subscribe(
        passportDetails => {
          console.log("Fetched passport details:", passportDetails);
          
          // Assign the passport details to the selected user based on the type
          if (user.type === 'fresh-passport') {
            console.log(user.type === 'fresh-passport');
            this.selectedUser.passportDetails = passportDetails;
            // this.selectedUser.passportDetails = {
            //   passportData: passportDetails,
            //   applicantData: {} // Modify as per your data structure
            // };
          } else if (user.type === 're-issue passport') {
            console.log(user.type === 're-issue passport')
            this.selectedUser.passportDetails = passportDetails;
          }
  
          console.log("Selected user with passport details:", this.selectedUser);
        },
        error => {
          console.log('Error occurred while fetching passport details:', error);
        }
      );
    }
  }
  
   
  
  closeFormDetails(): void {
    this.selectedUser = null; // Reset the selected user for form details
  }

  logout(): void {
    localStorage.removeItem("isLoggedIN");
    this.adminService.isAuthenticated = false;
    this.authService.logout();
  }
}
