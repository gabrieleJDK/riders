import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeLinkIndex = -1;

  links = [
    {
      label: 'Accedi',
      link: './login',
      index: 0
    },
    {
      label: 'Registrati',
      link: './registration',
      index: 1
    }
  ];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
