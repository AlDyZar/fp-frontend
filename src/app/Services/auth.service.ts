import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public isAuthenticated = false;
  private HttpOptions;
  public username;
  public email;

  constructor(private rest: RequestService) { }

  bindHttpHeaders(headers) {
    this.HttpOptions = {
      headers: new HttpHeaders(headers)
    };
  }

  login(body) {
    this.bindHttpHeaders({
      'Content-Type':  'application/json',
    });

    return this.rest.post('/login', body, this.HttpOptions).map(resp => {
      if (resp['data']['token']) {
        this.username = resp['data']['user']['name'];
        this.email = resp['data']['user']['email'];
        this.isAuthenticated = true;
        localStorage.setItem('jwt-token', resp['data']['token']);
      }
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  logout() {
    this.bindHttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    });
    localStorage.removeItem('jwt-token');
    return this.rest.get('/logout', this.HttpOptions).map(
      resp => {
        if (resp['status']) {
          this.isAuthenticated = false;
          this.username = null;
          this.email = null;
        }
        return resp;
      }
    ).catch(err => {
      return Observable.throw(err);
    });
  }

  register(body) {
    this.bindHttpHeaders({
      'Content-Type':  'application/json',
    });

    return this.rest.post('/register', body, this.HttpOptions).map(resp => {
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
    console.log(localStorage.getItem('jwt-token'));
    this.bindHttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    });
    return this.rest.get('/user', this.HttpOptions).map(
      resp => {
        console.log(resp);
        if (resp['status']) {
          this.username = resp['data']['user']['name'];
          this.email = resp['data']['user']['email'];
          this.isAuthenticated = true;
        }
        return resp;
      }
    ).catch(err => {
      return Observable.throw(err);
    });
  }
}
