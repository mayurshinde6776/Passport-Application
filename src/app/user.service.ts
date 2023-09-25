import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Get the logged-in user
getLoggedInUser(): Observable<any> | undefined {
  const loggedInUserJson = localStorage.getItem('loggedInUser');
  if (!loggedInUserJson) {
    console.error('Logged-in user not found in localStorage');
    return undefined;
  }
  const loggedInUser = JSON.parse(loggedInUserJson) as { id: number };
  const loggedInUserId = loggedInUser.id;
  const url = `${this.apiUrl}/${loggedInUserId}`;
  return this.http.get(url);
}

// Update the type property of the logged-in user
updateLoggedInUserType(type: string): Observable<any> | undefined {
  const loggedInUserJson = localStorage.getItem('loggedInUser');
  if (!loggedInUserJson) {
    console.error('Logged-in user not found in localStorage');
    return undefined;
  }
  const loggedInUser = JSON.parse(loggedInUserJson) as { id: number };
  const loggedInUserId = loggedInUser.id;
  const url = `${this.apiUrl}/${loggedInUserId}`;
  const body = { type: type };
  return this.http.put(url, body);
}

}
