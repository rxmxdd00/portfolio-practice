import { Observable, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userInfo = new Subject<any>();
  public dashboardSelected = new Subject<any>();

  constructor(private http: HttpClient) { }

  create(data : any) : Observable<any> {
    return this.http.post(baseUrl+'users/create', data);
  }

  login (data : any): Observable<any> {
    return this.http.post(baseUrl+'users/login', data);
  } 
}
