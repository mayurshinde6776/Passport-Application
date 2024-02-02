import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-re-issue-passport',
  templateUrl: './re-issue-passport.component.html',
  styleUrls: ['./re-issue-passport.component.css']
})
export class ReIssuePassportComponent implements OnInit {
  previousPassportForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.previousPassportForm = this.formBuilder.group({
      passportNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      dateOfIssue: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]],
      dateOfExpiry: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{2}-\d{4}$/)]],
      fileNumber: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],

     monthYearApplying: ['', Validators.required],
      passportOffice: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]]
    });
    
  }

  submitForm() {
    if (this.previousPassportForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
  
    const formData = this.previousPassportForm.value;
    this.http.post('http://localhost:3000/freshpassport', formData).subscribe(
      (response) => {
        console.log('Form submitted successfully');
        alert('Form submitted successfully');
        // Handle success response
      },
      (error) => {
        console.log('Error submitting form:', error);
        // Handle error response
      }
    );
  }
  
}
