import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegistrationComponent } from './components/account/registration/registration.component';
import { HomeRiderComponent } from './components/home-rider/home-rider.component';
import { HomeOwnerComponent } from './components/home-owner/home-owner.component';
import { RegistrationRiderComponent } from './components/registration-rider/registration-rider.component';
import { RegistrationOwnerComponent } from './components/registration-owner/registration-owner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'home-rider', component: HomeRiderComponent},
  { path: 'home-owner', component: HomeOwnerComponent},
  { path: 'registration-rider', component: RegistrationRiderComponent},
  { path: 'registration-owner', component: RegistrationOwnerComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
