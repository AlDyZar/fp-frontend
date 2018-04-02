import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  private HttpHeaders;

  constructor(private rest: RequestService) { }

  injectHeader() {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    };
  }

  getTransaction() {
    this.injectHeader();

    return this.rest.get('/transaction', this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  getHistory() {
    this.injectHeader();

    return this.rest.get('/history', this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  findTransaction(id) {
    this.injectHeader();

    return this.rest.get('/transaction/' + id, this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  findHistory(id) {
    this.injectHeader();

    return this.rest.get('/history/' + id, this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  getCart() {
    this.injectHeader();

    return this.rest.get('/cart', this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  checkout() {
    this.injectHeader();

    return this.rest.get('/pay', this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  updateProfile(body) {
    this.injectHeader();

    return this.rest.patch('/user', body, this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}
