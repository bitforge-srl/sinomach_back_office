import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-removeSubType',
  templateUrl: './remove-subtype.component.html',
  styleUrls: ['./remove-subtype.component.css'],
})


export class RemoveSubTypeComponent {
 
  constructor(private service: RestService, private modal: NzModalService) { }

  confirmModal?: NzModalRef; // For testing by now
  @Input() subtypeId:number = 0;

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>{
        this.removeSubType();
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
    
 
  removeSubType(){  
    console.log(this.subtypeId)
    this.service.deleteSubType(this.subtypeId)
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
 