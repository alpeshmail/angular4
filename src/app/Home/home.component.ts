

import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
    selector: 'app-home',
    template: `
  <div class="jumbotron">
    <h1 class="display-3">home Search App</h1>
  </div>
   `
  })
  export class HomeComponent {
  }
  
  @Component({
    selector: 'app-search',
    template: `
  <div class="jumbotron">
    <h1 class="display-3">iTunes Search App</h1>
  </div>
   `
  })
  export class SearchComponent {
  }

  @Component({
    selector: 'app-header',
    template: `<nav class="navbar navbar-light bg-faded">
    <a class="navbar-brand"
       [routerLink]="['home']">iTunes Search App
    </a>
    <ul class="nav navbar-nav">
      <li class="nav-item"
          [routerLinkActive]="['active']">
        <a class="nav-link"
           [routerLink]="['home']">Home
        </a>
      </li>
      <li class="nav-item"
          [routerLinkActive]="['active']">
        <a class="nav-link"
           [routerLink]="['search']">Search
        </a>
      </li>
      <li class="nav-item"
      [routerLinkActive]="['active']">
        <a class="nav-link"
        [routerLink]="['hero']">Hero
    </a>
  </li>
    </ul>
  </nav>
   `
  })
  export class HeaderComponent {
    constructor(private router: Router) {
    }
  
    goHome() {
      this.router.navigate(['']);
    }
  
    goSearch() {
      this.router.navigate(['search']);
    }
  }
  