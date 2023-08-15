import { Component, Input} from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ItemType, DragAndDropItem } from 'src/app/pages/type/type'; 


@Component({
  selector: 'app-editType',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css'],
})

export class EditComponent {

  isVisible = false;
  editedNameType: string = "";
  editedDescriptionType: string = "";
  editedSrcBannerType: string = "";
  editedSrcImgType: string = "";

  constructor(private service: RestService, private modal: NzModalService) { }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.editType();
    console.log(this.data?.name);
    
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  @Input() data: ItemType | undefined;
  @Input() typeId:number |undefined;
    
  editType(){  
    if (this.data?.id !== undefined){
    const idEditType = this.data?.id;
    console.log(this.editedNameType);
    console.log(this.data?.id);
    this.service.editNameType(this.data?.id, this.editedNameType).subscribe(
      response=>{
        if(response.success == true){
          console.log(response);
          this.reloadPage();
        }
        console.log(response);
       }
    )
  }
  }

  reloadPage() {
    window.location.reload();
  }
}
