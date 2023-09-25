import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface FormData {
  passportData: any;
  applicantData: any;
  [key: string]: any; // Index signature to support string-based indexing
}

@Component({
  selector: 'app-fresh-passport',
  templateUrl: './fresh-passport.component.html',
  styleUrls: ['./fresh-passport.component.css']
})
export class FreshPassportComponent implements OnInit {
  passportForm!: FormGroup;
  applicantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.passportForm = this.formBuilder.group({
      givenName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      surname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      district: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      regionCountry: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      address: ['', Validators.required],
      knownByOtherNames: [''],
      changedName: [''],
      gender: ['', Validators.required],
      citizenship: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      maritalStatus: ['', Validators.required],
      employmentType: ['', Validators.required]
    });

    this.applicantForm = this.formBuilder.group({
      fatherFirstName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      fatherSurname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      motherFirstName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      motherSurname: ['',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      guardianFirstName: [''],
      guardianSurname: [''],
      spouseFirstName: [''],
      spouseSurname: [''],
      fatherFileNumber: [''],
      fatherNationality: [''],
      motherFileNumber: [''],
      motherNationality: [''],
      
      houseNoStreet: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      villageTownCity: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      district: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      policeStation: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      
      state: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      pin: ['', Validators.pattern(/^\d*$/)],
      mobileNumber: ['', [Validators.pattern(/^\d{10}$/)]],
      telephoneNumber: ['', Validators.pattern(/^\d*$/)],
      email: ['', [Validators.email, Validators.required]],

     
    });
  }

  get passportFormControls() {
    return this.passportForm.controls;
  }

  get applicantFormControls() {
    return this.applicantForm.controls;
  }

  submitForm() {
    if (true) {
      const passportData = this.passportForm.value;
      const applicantData = this.applicantForm.value;

      const formData: FormData = {
        passportData,
        applicantData
      };

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
    } else {
      alert('Please fill in all required fields');
    }
  }
}
