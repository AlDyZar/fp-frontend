import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequestService {

  private apiurl = 'localhost:8000/api';

  constructor(private http: HttpClient) { }

  get(route, headers) {
    this.http.get(this.apiurl + route, headers);
  }

  post(route, body, headers) {
    this.http.post(this.apiurl + route, body, headers);
  }

  patch(route, body, headers) {
    this.http.post(this.apiurl + route, body, headers);
  }

  delete(route, headers) {
    this.http.delete(this.apiurl + route, headers);
  }
}
