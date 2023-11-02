import {Component} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";


@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent {
  descriptionType: any;

  newTypeName: any;
  imdId = 0;

  constructor(private restService: RestService) {
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  addType(): void {
    console.log(this.newTypeName);
    this.restService.addNewType(this.newTypeName, this.descriptionType, this.imdId)
      .subscribe(response => {
          if (response.success == true) {
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

  handleChange(info: NzUploadChangeParam): void {
    console.log(info.file.status)
    if (info.file.status === 'done') {
      this.imdId = info.fileList[0].response.id;
      console.log("done", this.imdId);
    }
  }

  onRemoveFile = (file: NzUploadFile) => {

    console.log("service", this.restService);
    console.log("file", file);
    this.imdId = file.response.id;
    console.log("imageId", this.imdId);
    this.restService.deleteImageByImgId(this.imdId).subscribe(data => {
      console.log(data)
    });

    console.log("removeFile");
    return true;
  }
}
