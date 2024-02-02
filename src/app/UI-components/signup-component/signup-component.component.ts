import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { UserList } from '../../user-list';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponent {
  formData: UserList = {
    name: '',
    username: '',
    password: '',
    mobile: '',
    DOB: '',
    status: 'New',
    image: '',
    type: '',
    userID:''
  };
  
  formErrors: string[] = [];

  constructor(private formService: FormService) {}

  submitForm() {
    this.formErrors = []; // Reset form errors
    // Call the service to save the form data
    this.formService.saveFormData(this.formData).subscribe(
      response => {
        console.log('Form data saved successfully:', response);
        // Reset the form after successful submission
        this.formData = {
          name: '',
          username: '',
          password: '',
          mobile: '',
          DOB: '',
          status: 'New',
          image: '',
          type: '',
          userID:''
        };
        // Show an alert
        alert('Form data saved successfully!');
      },
      error => {
        if (error.status === 422) {
          this.formErrors = error.error.errors; // Capture form validation errors
        } else {
          console.error('Error saving form data:', error);
        }
      }
    );
  }

   getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Months are zero-based
    const day = today.getDate();

    // Format the date as "YYYY-MM-DD"
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    return formattedDate;
  }
}
