import { Injectable } from '@angular/core';
import {RequestService} from './request.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductListService {

  public resp: any = {};

  constructor(private rest: RequestService) { }

  search(name) {
    name = name.trim();
    name = name.replace(/ /g, '%20');
    if (name !== '') {
      return this.rest.get('/items?name=' + name, {}).map(resp => {
        console.log(resp);
        resp['name'] = name;
        this.resp = resp;
        // return this.resp;
      }).catch(err => {
        return Observable.throw(err);
      });
    } else {
      return this.rest.get('/items', {}).map(resp => {
        console.log(resp);
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
        // return this.resp;
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
}
