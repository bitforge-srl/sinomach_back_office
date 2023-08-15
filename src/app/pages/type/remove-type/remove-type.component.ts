import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-removeType',
  templateUrl: './remove-type.component.html',
  styleUrls: ['./remove-type.component.css'],
})


export class RemoveComponent {
 
  constructor(private service: RestService, private modal: NzModalService) { }

  confirmModal?: NzModalRef; // For testing by now

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>{
        this.removeType();
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
   
  @Input() typeId:number = 0;
 
  removeType(){  
    console.log(this.typeId)
    this.service.deleteType(this.typeId)
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
 