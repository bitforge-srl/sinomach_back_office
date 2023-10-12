import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {ItemSubType, ItemType} from '../../../interfaces/type';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

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


  constructor(private service: RestService) {
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

    this.visible = false;
  }


  addProduct(): void {
    console.log("addProduct");

    this.service.addProduct(
      undefined,
      this.parentType,
      this.parentSubType,
      this.productName,
      this.fullDescription,
      this.shortSpecification,
      this.content,
      this.additionalDescription,
      this.img).subscribe(
      response => {
        if (response.success == true) {
          console.log(response);
          this.reloadPage();
        }
        console.log(response);
      }
    );
    console.log("add SubType");
    this.productName = "";
    this.fullDescription = "";
    this.shortSpecification = "";
    this.content = "";
    this.additionalDescription = "";
    this.img = "";
  }

  reloadPage() {
    window.location.reload();
  }

  shortSpecChange($event: any) {
    this.shortSpecification = $event;
  }


  handleChange(info: NzUploadChangeParam): void {
    console.log(info.file.status)

    let imdId;
    if (info.file.status === 'done') {
      imdId = info.fileList[0].response.id;
      console.log("done", imdId);
    }

    // if (info.file.status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (info.file.status === 'done') {
    //   console.log("done", info);
    // } else if (info.file.status === 'error') {
    //   console.log("error",info);
    // }
  }

  onRemoveFile(file: NzUploadFile): boolean {
    console.log(file)

    console.log("removeFile")
    return true;
  }
}
