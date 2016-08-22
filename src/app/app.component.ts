import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [NavbarComponent]
})
export class AppComponent { }
