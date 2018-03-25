import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated = false;
  public name;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log('init');
    this.auth.validateToken().subscribe(resp => {
      console.log(resp);
      this.isAuthenticated = this.auth.isAuthenticated;
    },
      err => {
        console.log(err);
      });
    this.isAuthenticated = this.auth.isAuthenticated;
    this.name = this.auth.username;
  }

  logout() {
    console.log('Logged Out');
    this.auth.logout().subscribe(resp => {
      console.log(resp);
      this.isAuthenticated = this.auth.isAuthenticated;
    },
      err => {
      console.log(err);
    });
  }

}
