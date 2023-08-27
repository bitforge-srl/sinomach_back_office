import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ItemSubType, ItemType, ItemTypeAndSubType, ItemProduct } from '../../../interfaces/type';


@Component({
  selector: 'app-editProduct',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})

export class EditProductComponent {

  isVisible = false;
       
  type: ItemType| undefined;
  subType: ItemSubType| undefined;
  productName:string | undefined; 
  fullDescription:string|undefined; 
  shortSpecification:string|undefined; 
  content:string|undefined; 
  additionalDescription:string|undefined; 
  img:string|undefined; 

  parentTypeForEdit:ItemType|undefined

  constructor(private service: RestService, private modal: NzModalService) { }
 
  @Input() productId!:number
  @Input() parentType:ItemType | undefined
  @Input() parentSubType:ItemSubType | undefined

  parentProduct!:ItemProduct
  
    showModal(): void {
    this.isVisible = true;   

    this.service.getProduct(this.productId).subscribe(
      product=>{
        this.productName=product.name;
        this.fullDescription = product.fullDescription;
        this.shortSpecification = product.shortSpecification;
        this.content = product.content;
        this.additionalDescription = product.additionalDescription;
        this.img = product.img;

        console.log(product)
      }
         );
  }

  parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    console.log("Received parentType", this.parentType);
  }

  parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
    console.log("Received parentSubType:", this.parentSubType);
  }  
 

  handleOk(): void {
    console.log('Button ok clicked!');
    this.editProduct();      
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
  editProduct(){  
    this.service.editProduct(
        this.productId,
        this.type,
        this.subType,
        this.productName, 
        this.fullDescription,
        this.shortSpecification,
        this.content,
        this.additionalDescription,
        this.img
        ).subscribe(response=>{
           
      if(response.success == true){
        console.log(response);
        this.reloadPage();
      }
      console.log(response);
     }
  );
  }

  reloadPage() {
    window.location.reload();
  }
 
}

