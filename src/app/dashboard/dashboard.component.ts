import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
