import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService {

  private apiurl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  get(route, headers) {
    return this.http.get<{}>(this.apiurl + route, headers);
  }

  post(route, body, headers) {
    return this.http.post<{}>(this.apiurl + route, body, headers);
  }

  patch(route, body, headers) {
    return this.http.post<{}>(this.apiurl + route, body, headers);
  }

  delete(route, headers) {
    return this.http.delete<{}>(this.apiurl + route, headers);
  }
}
