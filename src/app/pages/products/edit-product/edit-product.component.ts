import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ItemSubType, ItemType, ItemTypeAndSubType } from '../../../interfaces/type';


@Component({
  selector: 'app-editProduct',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})

export class EditProductComponent {

  isVisible = false;
        typeId: number| undefined;
        subTypeId: number| undefined;
        productName:string|undefined; 
        fullDescription:string|undefined; 
        shortSpecification:string|undefined; 
        content:string|undefined; 
        additionalDescription:string|undefined; 
        img:string|undefined; 

  constructor(private service: RestService, private modal: NzModalService) { }
 
  @Input() productId:number | undefined
  @Input() parentType:ItemType | undefined
  @Input() parentSubType:ItemSubType | undefined

   
  
  showModal(): void {
    this.isVisible = true;   
   
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
        this.typeId,
        this.subTypeId,
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
