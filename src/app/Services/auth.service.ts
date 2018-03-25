import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public isAuthenticated = false;
  private HttpOptions;

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
        localStorage.setItem('jwt-token', resp['data']['token']);
      }
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  logout() {

  }

  register(body) {
    this.bindHttpHeaders({
      'Content-Type':  'application/json',
    });

    this.rest.post('/auth/register', body, this.HttpOptions);
  }

  forgotPassword() {

  }
}
