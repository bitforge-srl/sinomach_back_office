import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DragAndDropItem, ItemType } from '../pages/type/type';


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
  
  addNewType(name: string, descriptionType: string, srcBannerOfType:string, srcImageOfType:string):Observable<any>{
    const addedType = {"name": name,
                      "shortDescription":descriptionType,
                      "img": srcImageOfType,
                      "imgBanner":srcBannerOfType}; 
    console.log(addedType);
    return this.http.post('http://localhost:8080/api/type/add', addedType);
  }

  deleteType(typeId:number):Observable<any>{
    const templateUrl =  'http://localhost:8080/api/type/delete/'+typeId;
    return this.http.delete(templateUrl);
  }

  editNameType(typeId:number, name:string):Observable<any>{
    const newNameType = {"name": name };
    const templateUrl =  'http://localhost:8080/api/type/editNameType/'+typeId;
    return this.http.post(templateUrl, newNameType);
  }

  editOrderTypes(dragAndDropItemType: DragAndDropItem[]):Observable<any>{
    const newOrderTypes:DragAndDropItem[] = dragAndDropItemType;
    const templateUrl = 'http://localhost:8080/api/type/updateOrderTypes'
    return this.http.post(templateUrl, newOrderTypes);
  }

  addNewSubType(parentTypeSelected: ItemType , name: string): Observable<any>{
    console.log("restServise");

    console.log(parentTypeSelected);
    console.log(name);

    const newSubType = {
                        "typeId": parentTypeSelected.id,
                        "name": name
                       }
    const templateUrl = 'http://localhost:8080/api/subtype/add';

    return this.http.post(templateUrl, newSubType);
  }


  deleteSubType(subtypeId:number):Observable<any>{
    const templateUrl =  'http://localhost:8080/api/subtype/delete/'+subtypeId;
    return this.http.delete(templateUrl);
  }
 
}

