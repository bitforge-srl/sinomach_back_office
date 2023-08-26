import { Component, Input } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { ItemSubType, ItemType } from '../../../interfaces/type';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  parentType!: ItemType;
  parentSubType!: ItemSubType;

  productName:string| undefined;
  fullDescription:string|undefined;
  shortSpecification:string|undefined;
  content:string|undefined;
  additionalDescription:string|undefined;
  img:string|undefined;

  parentTypeForSubType!:ItemType;

parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    console.log("Received parentType", this.parentType);
  }

parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
    console.log("Received parentSubType:", this.parentSubType);
  }  
   

  constructor(private service: RestService) { }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    console.log("Output after Input", this.productName);
    console.log("Output after Input", this.fullDescription);
    console.log("Output after Input", this.shortSpecification);
    console.log("Output after Input", this.content);
    console.log("Output after Input", this.additionalDescription);
    console.log("Output after Input", this.img);

    this.visible = false;
  }

  
  addProduct(): void {
    console.log("addProduct");
    
  this.service.addProduct().subscribe(
    response=>{
        if(response.success == true){
        console.log(response);
        this.reloadPage();
      }
      console.log(response);
     }
  );
      console.log("add SubType");
    }

  reloadPage() {
    window.location.reload();
  }
}
