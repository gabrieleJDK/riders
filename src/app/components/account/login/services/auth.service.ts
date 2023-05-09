import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: 'api/Auth';

  constructor(
    private http: HttpClient,
  ) { }

  // Metodo che effettua il login (sia rider che ristorante)
  login(username: string, password: string): Observable<any> {
    const user = { username: username, password: password };
    return this.http.post(`${this.apiBaseUrl}/login`, user);
  }

  // Metodo che salva i dati
  saveStorage(res) {
    const user = {
      name: res.name,
      username: res.username,
      password: res.password,
    }
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // Controllo dei dati
  isLogged(): boolean {
    return JSON.parse(sessionStorage.getItem('user')) != null;
  }

  // Metodo che effettua il logout
  // logout(): Observable<any> {
  //   return this.http.post(`${this.apiBaseUrl}/logout`);
  // }

  // Metodo che ci permette il logout
  logout(): void {
    sessionStorage.removeItem('user');
  }
}
