import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {ItemSubType, ItemType} from '../../../interfaces/type';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  hostName: string = environment.HOST

  constructor(private restService: RestService) {
    console.log("constructor", restService)
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  parentType!: ItemType;
  parentSubType!: ItemSubType;
  productName: string = "";
  fullDescription: string = "";
  shortSpecification: string = "";
  content: string = "";
  additionalDescription: string = "";
  img: string = "";

  imdId: number = 0;

  collapseStates = {
    fullDescription: false,
    shortSpecification: false,
    content: false,
    additionalDescription: false,
    img: false,
  };

  parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    this.parentType.subTypes.find(subtype => {
      if (subtype.name === "default") {
        this.parentSubType = subtype;
      }
    })
  }

  parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {

    this.productName = "";
    this.fullDescription = "";
    this.shortSpecification = "";
    this.content = "";
    this.additionalDescription = "";
    this.img = "";
    this.imdId = 0;

    this.visible = false;
  }


  addProduct(): void {
    console.log("addProduct");

    this.restService.addProduct(
      undefined,
      this.parentType,
      this.parentSubType,
      this.productName,
      this.fullDescription,
      this.shortSpecification,
      this.content,
      this.additionalDescription,
      this.img,
      this.imdId).subscribe(
      response => {
        if (response.success == true) {
          console.log(response);
          this.reloadPage();
        }
        console.log(response);
      }
    );

    this.productName = "";
    this.fullDescription = "";
    this.shortSpecification = "";
    this.content = "";
    this.additionalDescription = "";
    this.img = "";
    this.imdId = 0;
  }

  reloadPage() {
    window.location.reload();
  }

  shortSpecChange($event: any) {
    this.shortSpecification = $event;
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
