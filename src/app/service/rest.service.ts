import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DragAndDropItem, ItemSubType, ItemType} from '../interfaces/type';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  getDataTypes(): Observable<any> {
    return this.http.get<Observable<any>>(environment.HOST + 'api/type/all');
  }

  getDataOfProducts(): Observable<any> {
    return this.http.get<Observable<any>>(environment.HOST + 'api/product/all');
  }

  addNewType(name: string, descriptionType: string, imgId: number): Observable<any> {
    const addedType = {
      "name": name,
      "shortDescription": descriptionType,
      "imgId": imgId
    };
    console.log(addedType);
    return this.http.post(environment.HOST + 'api/type/add', addedType);
  }

  deleteType(typeId: number): Observable<any> {
    const templateUrl = environment.HOST + 'api/type/delete/' + typeId;
    return this.http.delete(templateUrl);
  }

  editType(typeId: number, name: string, description: string, imgId: number): Observable<any> {
    const newDataType = {
      "name": name,
      "shortDescription": description,
      "imgId": imgId
    };
    const templateUrl = environment.HOST + 'api/type/editType/' + typeId;
    return this.http.post(templateUrl, newDataType);
  }

  editOrderTypes(dragAndDropItemType: DragAndDropItem[]): Observable<any> {
    const newOrderTypes: DragAndDropItem[] = dragAndDropItemType;
    const templateUrl = environment.HOST + 'api/type/updateOrderTypes'
    return this.http.post(templateUrl, newOrderTypes);
  }

  addNewSubType(parentTypeSelected: ItemType, name: string): Observable<any> {
    console.log("restServise");

    console.log(parentTypeSelected);
    console.log(name);

    const newSubType = {
      "typeId": parentTypeSelected.id,
      "name": name
    }
    const templateUrl = environment.HOST + 'api/subtype/add';

    return this.http.post(templateUrl, newSubType);
  }

  deleteSubType(subtypeId: number): Observable<any> {
    const templateUrl = environment.HOST + 'api/subtype/delete/' + subtypeId;
    return this.http.delete(templateUrl);
  }

  editSubType(subtypeId: number | undefined, editedNameSubType: string, typeId: number | undefined): Observable<any> {
    const dataSubType = {
      "subtypeId": subtypeId,
      "editedNameSubType": editedNameSubType,
      "typeId": typeId
    };

    console.log(subtypeId);

    console.log("service editSubtype");
    const templateUrl = environment.HOST + 'api/subtype/edit';
    return this.http.post(templateUrl, dataSubType);
  }

  addProduct(
    productId: number | undefined,
    type: ItemType | undefined,
    subType: ItemSubType | undefined,
    productName: string | undefined,
    fullDescription: string | undefined,
    shortSpecification: string | undefined,
    content: string | undefined,
    additionalDescription: string | undefined,
    img: string | undefined,
    imgId: number | undefined
  ): Observable<any> {
    const dataProduct = {
      "productId": productId,
      "name": productName,
      "fullDescription": fullDescription,
      "shortSpecification": shortSpecification,
      "content": content,
      "additionalDescription": additionalDescription,
      "img": img,
      "subType": subType,
      "imgId": imgId
    };

    console.log(dataProduct);

    console.log("service addProduct");
    const templateUrl = environment.HOST + 'api/product/add';
    return this.http.post(templateUrl, dataProduct);
  }

  deleteProduct(productId: number): Observable<any> {
    const templateUrl = environment.HOST + 'api/product/delete/' + productId;
    return this.http.delete(templateUrl)
  }

  editProduct(
    productId: number | undefined,
    subType: ItemSubType | undefined,
    productName: string | undefined,
    fullDescription: string | undefined,
    shortSpecification: string | undefined,
    content: string | undefined,
    additionalDescription: string | undefined,
    img: string | undefined,
    imgId: number | undefined
  ): Observable<any> {
    const dataProduct = {
      "id": productId,
      "subType": subType,
      "name": productName,
      "fullDescription": fullDescription,
      "shortSpecification": shortSpecification,
      "content": content,
      "additionalDescription": additionalDescription,
      "img": img,
      "imgId": imgId
    };

    console.log(dataProduct);

    console.log("service editProduct");
    const templateUrl = environment.HOST + 'api/product/edit';
    return this.http.post(templateUrl, dataProduct);
  }

  getProduct(productId: number): Observable<any> {
    const templateUrl = environment.HOST + 'api/product/' + productId;

    return this.http.get(templateUrl);
  }

  deleteImageByImgId(imgId: number): Observable<any> {
    const templateUrl = environment.HOST + 'api/image/delete/' + imgId;
    return this.http.delete(templateUrl);

  }
}

