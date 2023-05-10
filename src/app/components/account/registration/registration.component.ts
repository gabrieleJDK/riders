import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    terms: new FormControl('', Validators.requiredTrue)
  })

  constructor (
    private router: Router,
    private accountService: AccountService
  ) {}

  onSubmit() {
    const user = this.registrationForm.value;
    this.accountService.registration(user.username, user.password, user.email).subscribe({
      next: (res) => {
        console.log('Utente inserito: ', res);
        // this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
