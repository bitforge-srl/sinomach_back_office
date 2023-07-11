import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getDataTypes(): Observable<any> {
    return this.http.get<Observable<any>>('https://cn-sinomach.md/api/menu_product/all');
  }

  getDataOfProducts():Observable<any> {
    return this.http.get<Observable<any>>('https://cn-sinomach.md/api/product/all');
  }
  
}
