import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/";
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http: HttpClient) { }

  create(data : any) : Observable<any> {
    return this.http.post(baseUrl+'ecommerce/create', data);
  }

  get() : Observable<any> {
    return this.http.get(baseUrl+'ecommerce/get');
  }

  getOne(id : any) : Observable<any> {  
    return this.http.get(`${baseUrl}ecommerce/get/${id}`);
  }

  update(id : any, data:any) : Observable<any> {  
    return this.http.put(`${baseUrl}ecommerce/update/${id}`, data);
  }

  delete(id : any) : Observable<any> {  
    return this.http.delete(`${baseUrl}ecommerce/delete/${id}`);
  }
}
