import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  
  loggedIn: boolean = false;

  constructor( private _auth: AuthService) { }

  ngOnInit(): void {
    if (this._auth.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    this._auth.logout();
  }

}
