import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getDataTypes(): Observable<any> {
    return this.http.get<Observable<any>>('http://localhost:8080/api/type/all');
  }

  getDataOfProducts():Observable<any> {
    return this.http.get<Observable<any>>('http://localhost:8080/api/product/all');
  }
  
  addNewType(type: undefined):Observable<any>{
    return this.http.put('http://localhost:8080/api/type/add', type)
  }
}
 