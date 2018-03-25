import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';

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
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    this.rest.post('/auth/login', body, this.HttpOptions);
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
