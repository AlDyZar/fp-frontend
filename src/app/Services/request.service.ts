import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService {

  private apiurl = 'https://api.dyzdev.my.id/api'; // 'http://localhost:8000/api';
  private HttpOptions;

  constructor(private http: HttpClient) { }

  bindHttpHeaders(headers) {
    this.HttpOptions = {
      headers: new HttpHeaders(headers)
    };
  }

  get(route, headers) {
    this.bindHttpHeaders(headers);
    return this.http.get<{}>(this.apiurl + route, this.HttpOptions);
  }

  post(route, body, headers) {
    this.bindHttpHeaders(headers);
    return this.http.post<{}>(this.apiurl + route, body, this.HttpOptions);
  }

  patch(route, body, headers) {
    this.bindHttpHeaders(headers);
    return this.http.patch<{}>(this.apiurl + route, body, this.HttpOptions);
  }

  delete(route, headers) {
    this.bindHttpHeaders(headers);
    return this.http.delete<{}>(this.apiurl + route, this.HttpOptions);
  }
}
