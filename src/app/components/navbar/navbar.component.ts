import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent { }
