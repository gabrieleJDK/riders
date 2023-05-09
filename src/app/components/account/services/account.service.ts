import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiBaseUrl: 'api/Accounts';

  constructor (
    private http: HttpClient,
  ) {}

  registration(username: string, password: string, email: string) {
    const user = { username: username, password: password, email: email};
    return this.http.post(`${this.apiBaseUrl}/registration`, user);
  }

  resetPassword () {}

  changePassword () {}

  deleteAccount () {}
}
