import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiBaseUrl: 'api/Accounts';

  constructor (
    private http: HttpClient,
  ) {}

  registration(username: string, password: string, email: string, role: string) {
    const user = { username: username, password: password, email: email, role: role};
    return this.http.post(`${this.apiBaseUrl}/registration`, user);
  }

  resetPassword () {}

  changePassword () {}

  deleteAccount () {}
}
