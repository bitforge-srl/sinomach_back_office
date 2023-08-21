import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ItemTypeAndSubType } from '../../type/type';


@Component({
  selector: 'app-editSubType',
  templateUrl: './edit-subtype.component.html',
  styleUrls: ['./edit-subtype.component.css'],
})

export class EditSubTypeComponent {

  isVisible = false;
  editedNameSubType: string| any ;
  editedParentType: string = ""; 

  constructor(private service: RestService, private modal: NzModalService) { }
 
  @Input() subtypeId:number | undefined
  @Input() typeId:number | undefined
  @Input() parentType:string | undefined
  @Input() subType: string | undefined
  @Input() selectedTypeId:number | any


  showModal(): void {
    this.isVisible = true;   
    this.editedNameSubType = this.subType;
    this.selectedTypeId = this.typeId;
  }

   handleEditSelectedSubType(selectedTypeId: number) {
    this.selectedTypeId = selectedTypeId;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.editSubType();      
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
  editSubType(){  
    this.service.editSubType(this.subtypeId, this.editedNameSubType, this.selectedTypeId)
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
