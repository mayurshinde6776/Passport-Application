import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = 'http://localhost:3000/users';
  passportDetailsUrl = 'http://localhost:3000/freshpassport';

 public  isAuthenticated = false;
 isAdminLoggedIn = false;
  constructor(private http: HttpClient) { }

  setAdminLoggedIn(loggedIn: boolean): void {
    
    this.isAdminLoggedIn = loggedIn;
    console.log('setAdminLoggedIn called with true in services');
  }
  // Get the list of users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Update the status of a user
  updateUserStatus(userId: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    const body = { status: status };
    return this.http.put(url, body);
  }


  // Save user data
  saveUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  // Delete a user
  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }

  // Update user data
  updateUser(userId: number, user: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, user);
  }

  getFormDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
  getPassportDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.passportDetailsUrl}/${userId}`);
  }
  
  
  deletePassportDetails(id: number): Observable<void> {
    return this.http.delete<void>(`${this.passportDetailsUrl}/freshpassport/${id}`);
  }


  
  
 
}
