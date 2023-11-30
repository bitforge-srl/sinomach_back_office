import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ItemSubType, ItemType, ItemTypeAndSubType, ItemProduct, ItemShortSpecification} from '../../../interfaces/type';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-editProduct',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})

export class EditProductComponent {
  isVisible = false;

  type: ItemType | undefined;
  subType: ItemSubType | undefined;
  productName: string | undefined;
  fullDescription: string | any
  shortSpecification: string | any;
  content: string | any;
  additionalDescription: string | any;
  hostName: string = environment.HOST
  constructor(private restService: RestService, private modal: NzModalService) {
  }

  @Input() productId!: number
  @Input() parentType: ItemType | undefined
  @Input() parentSubType: ItemSubType | undefined
  @Input() startType: ItemType | undefined
  @Input() startSubType: ItemSubType | undefined
  contentForFullDescription: string = "";
  contentForShortSpecificationProduct: string = "";
  contentForContentProduct: string = "";
  contentForAdditionalDescription: string = "";
  contentForImage: string = "";
  nameShortSpecificationEdit: string = "";
  valueOfShortSpecificationEdit: string = "";
  shortSpecificationsEdit: ItemShortSpecification[] = [];
  img: string | any;
  imgId: number| any;
  imgIdStart:number |any;

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

  showModal(): void {
    this.isVisible = true;
    // @ts-ignore
    this.parentTypeSelected(this.startType);
    // @ts-ignore
    this.parentSubTypeSelected(this.startSubType);

    this.restService.getProduct(this.productId).subscribe(
      product => {
        this.productName = product.name;
        this.contentForFullDescription = product.fullDescription;
        this.contentForShortSpecificationProduct = product.shortSpecification;
        this.contentForContentProduct = product.content;
        this.contentForAdditionalDescription = product.additionalDescription;
        this.contentForImage = product.img;
        this.imgId= product.imgId;

        this.imgIdStart = product.imgId;

        let parse = JSON.parse(this.contentForShortSpecificationProduct);
        let keys = Object.keys(parse);
        // @ts-ignore
        let values: string = Object.values(parse)
        for (let i = 0; i < keys.length; i++) {
          this.shortSpecificationsEdit.push(
            {
              name: keys[i],
              value: values[i]
            }
          )
        }
      }
    );
  }

  parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
  }

  parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
  }

  handleOk(): void {
    this.editProduct();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.contentForFullDescription = "";
    this.contentForShortSpecificationProduct = "";
    this.contentForContentProduct = "";
    this.contentForAdditionalDescription = "";
    this.contentForImage = "";
    this.imgId = 0;
    this.isVisible = false;
  }


  editProduct() {
    this.restService.editProduct(
      this.productId,
      this.parentSubType,
      this.productName,
      this.contentForFullDescription,
      this.translateToString(this.shortSpecificationsEdit),
      this.contentForContentProduct,
      this.contentForAdditionalDescription,
      this.contentForImage,
      this.imgId
    ).subscribe(response => {

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

  addItem() {
    // @ts-ignore
    this.shortSpecificationsEdit.push({
      name: this.nameShortSpecificationEdit,
      value: this.valueOfShortSpecificationEdit
    });

    this.nameShortSpecificationEdit = "";
    this.valueOfShortSpecificationEdit = "";
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.shortSpecificationsEdit.length) {
      this.shortSpecificationsEdit.splice(index, 1);
    }
  }

  translateToString(massive: ItemShortSpecification[]): string {
    let out: { [key: string]: string } = {};
    massive.forEach(item => {
      out[item.name] = item.value;
    });
    return JSON.stringify(out);
  }
  handleChange(info: NzUploadChangeParam): void {
    console.log(info.file.status)
    if (info.file.status === 'done') {
      this.imgId = info.fileList[0].response.id;
      console.log("done", this.imgId);
    }
  }
  onRemoveFile = (file: NzUploadFile)=> {

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
}

