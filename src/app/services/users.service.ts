import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  create(data : any) : Observable<any> {
    return this.http.post(baseUrl+'users/create', data);
  }

  login (data : any): Observable<any> {
    return this.http.post(baseUrl+'users/login', data);
  } 
}
