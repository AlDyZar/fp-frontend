import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductListService {

  public resp: any = {};
  private HttpHeaders = {};

  constructor(private rest: RequestService) { }

  search(name) {
    if (!name) {
      return;
    }
    name = name.trim();
    if (name !== '') {
      return this.rest.get('/items?name=' + name, {}).map(resp => {
        resp['name'] = name;
        this.resp = resp;
        return resp;
      }).catch(err => {
        return Observable.throw(err);
      });
    } else {
      return this.rest.get('/items', {}).map(resp => {
        this.resp = resp;
      }).catch(err => {
        return Observable.throw(err);
      });
    }
  }

  searchById(id) {
    return this.rest.get('/items/' + id, {}).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  searchByNameAndPage(name, page) {
    name = name.trim();
    name = name.replace(/ /g, '%20');
    if (name !== '') {
      return this.rest.get('/items?name=' + name + '&page=' + page, {}).map(resp => {
        resp['name'] = name;
        this.resp = resp;
        return resp;
      }).catch(err => {
        return Observable.throw(err);
      });
    } else {
      return this.rest.get('/items?page=' + page, {}).map(resp => {
        console.log(resp);
        this.resp = resp;
      }).catch(err => {
        return Observable.throw(err);
      });
    }
  }

  addToCart(itemID, itemQty) {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    };
    const body = {'item_id': itemID, 'qty': itemQty};
    return this.rest.post('/cart/', body, this.HttpHeaders).map(resp => {
      console.log(resp);
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  buyNow(itemID, itemQty) {
    this.HttpHeaders = {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
    };

    const body = {
      'item_id': itemID,
      'qty': itemQty
    };
    return this.rest.post('/pay', body, this.HttpHeaders).map(resp => {
      return resp;
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}
