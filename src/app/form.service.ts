import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserList } from './user-list';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  saveFormData(formData: UserList): Observable<Object> {
    return this.http.post(this.apiUrl, formData);
  }

  checkUserExistence(username: string): Observable<boolean> {
    const url = `${this.apiUrl}?username=${username}`;
    return this.http.get<boolean>(url);
  }

  updateUsers(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put(url, user);
  }

  
}
