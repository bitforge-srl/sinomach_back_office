import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ItemType, DragAndDropItem} from 'src/app/interfaces/type';
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";


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

  imgId: number | any;
  imgIdStart: number | any;


  constructor(private restService: RestService, private modal: NzModalService) {
  }

  showModal(): void {
    this.isVisible = true;

    this.imgId = this.data?.imgId;
    this.imgIdStart = this.imgId;
    // @ts-ignore
    this.editedNameType = this.data?.name;
    // @ts-ignore
    this.editedDescriptionType = this.data?.shortDescription;

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
  @Input() typeId: number | undefined;

  editType() {
    if (this.data?.id !== undefined) {
      const idEditType = this.data?.id;
      console.log(this.editedNameType);
      console.log(this.data?.id);
      this.restService.editType(this.data?.id, this.editedNameType, this.editedDescriptionType, this.imgId).subscribe(
        response => {
          if (response.success == true) {
            console.log(response);
            this.reloadPage();
          }
          console.log(response);
        }
      )
    }
  }

  handleChange(info: NzUploadChangeParam): void {
    console.log(info.file.status)
    if (info.file.status === 'done') {
      this.imgId = info.fileList[0].response.id;
      console.log("done", this.imgId);
    }
  }

  onRemoveFile = (file: NzUploadFile) => {

    console.log("service", this.restService);
    console.log("file", file);
    this.imgId = file.response.id;
    console.log("imageId", this.imgId);
    this.restService.deleteImageByImgId(this.imgId).subscribe(data => {
      console.log(data)
    });
    this.imgId = this.imgIdStart;

    console.log("removeFile");
    return true;
  }

  reloadPage() {
    window.location.reload();
  }
}
