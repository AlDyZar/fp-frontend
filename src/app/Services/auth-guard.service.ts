import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (localStorage.getItem('jwt-token')) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

}
