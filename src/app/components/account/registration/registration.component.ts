import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';

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
    role: new FormControl('', Validators.required),
    terms: new FormControl('', Validators.requiredTrue)
  })

  constructor (
    private router: Router,
    private accountService: AccountService,
    private modalService: NgbModal,
  ) {}

  onSubmit() {
    const user = this.registrationForm.value;
    this.accountService.registration(user.username, user.password, user.email, user.role).subscribe({
      next: (res) => {
        console.log('Utente inserito: ', res);


        // this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  open(content: any, titolo?: string){
    let title = titolo;

    this.modalService.open(content, {ariaLabelledBy: 'modal choice', size: 'md', centered: true}).result.then((res)=>{
      //nessuna azione
    }).catch((res)=>{
      console.log('nessuna azione');
    });

  }

  goToRider(){
    this.modalService.dismissAll();
    this.router.navigate(['registration-rider']);
  }

  goToOwner(){
    this.modalService.dismissAll();
    this.router.navigate(['registration-owner']);
  }

}
