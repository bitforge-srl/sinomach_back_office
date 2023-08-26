import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-removeProduct',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css'],
})


export class RemoveProductComponent {
 
  constructor(private service: RestService, private modal: NzModalService) { }

  confirmModal?: NzModalRef;

  @Input() productId:number = 0;

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>{
        this.removeProduct();
        new Promise((resolve, reject) => {
           resolve;
       
        }).catch(
          (error) => {
            console.error(error);
          }
        )
      }
    });
  }
    
 
  removeProduct(){  
    console.log(this.productId)
    this.service.deleteProduct(this.productId)
    .subscribe(response=>{
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
 