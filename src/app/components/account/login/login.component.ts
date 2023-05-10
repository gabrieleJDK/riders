import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;
  loggingError: string;

  constructor (
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(credentials: any) {
    if (credentials.username != '' && credentials.password != '') {
      this.authService.login(credentials.username, credentials.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            if(res.rider_Id != 0){
              this.router.navigate(['home-rider']);
            }

            if(res.restaurantOwner_Id != 0){
              this.router.navigate(['home-owner']);
            }
          } else {
            this.loggingError = 'Username o password errati.';
          }
        },
        error: (err) => {
          // this.messageService.add({severity: 'error', summary: 'Errore', detail: 'Username o password errati.', life: 5000});
        }
      })
    }
  }

}
