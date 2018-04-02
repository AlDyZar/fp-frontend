import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public isAuthenticated = false;
  private HttpHeaders;
  public data: any = {};

  constructor(private rest: RequestService) { }

  login(body) {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
    };

    return this.rest.post('/login', body, this.HttpHeaders).map(resp => {
      if (resp['token']) {
        this.data = resp['user'];
        this.isAuthenticated = true;
        localStorage.setItem('jwt-token', resp['token']);
      }
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  logout() {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    };
    localStorage.removeItem('jwt-token');
    return this.rest.get('/logout', this.HttpHeaders).map(
      resp => {
        this.isAuthenticated = false;
        this.data = {};
        return resp;
      }
    ).catch(err => {
      return Observable.throw(err);
    });
  }

  register(body) {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
    };

    return this.rest.post('/register', body, this.HttpHeaders).map(resp => {
      if (resp['status']) {
        return resp;
      }
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  forgotPassword() {

  }

  validateToken() {

    this.HttpHeaders = {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    };

    return this.rest.get('/user', this.HttpHeaders).map(
      resp => {
        console.log(resp);
        if (resp['user']) {
          this.data = resp['user'];
          this.isAuthenticated = true;
        }
        return resp;
      }
    ).catch(err => {
      localStorage.removeItem('jwt-token');
      this.isAuthenticated = false;
      return Observable.throw(err);
    });
  }
}
