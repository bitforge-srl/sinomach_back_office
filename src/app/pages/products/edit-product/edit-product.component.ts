import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ItemSubType, ItemType, ItemTypeAndSubType, ItemProduct, ItemShortSpecification} from '../../../interfaces/type';
import {AngularEditorConfig} from "@kolkov/angular-editor";


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
  img: string | any;


  constructor(private service: RestService, private modal: NzModalService) {
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
  itemShortSpecificationsForEdit: ItemShortSpecification[] = [];
  shortSpecToString: string = "";
  itemShortSpecifications: ItemShortSpecification[] | undefined;

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

    console.log("Start Type", this.startType)
    console.log("Start SubType", this.startSubType)

    // @ts-ignore
    this.parentTypeSelected(this.startType);
    // @ts-ignore
    this.parentSubTypeSelected(this.startSubType);

    this.service.getProduct(this.productId).subscribe(
      product => {
        console.log("-------", product)

        this.productName = product.name;
        this.contentForFullDescription = product.fullDescription;
        this.contentForShortSpecificationProduct = product.shortSpecification;
        this.contentForContentProduct = product.content;
        this.contentForAdditionalDescription = product.additionalDescription;
        this.contentForImage = product.img;

        let parse = JSON.parse(this.contentForShortSpecificationProduct);
        let keys = Object.keys(parse);
        // @ts-ignore
        let values:string = Object.values(parse)
        for (let i = 0; i < keys.length; i++) {
          this.shortSpecificationsEdit.push(
            {
              name: keys[i],
              value: values[i]
            }
          )
        }
        console.log(this.shortSpecificationsEdit);
      }
    );
  }

  parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    console.log("Received parentType", this.parentType);
  }

  parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
    console.log("Received parentSubType:", this.parentSubType);
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.editProduct();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.contentForFullDescription = "";
    this.contentForShortSpecificationProduct = "";
    this.contentForContentProduct = "";
    this.contentForAdditionalDescription = "";
    this.contentForImage = "";

    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  editProduct() {
    this.service.editProduct(
      this.productId,
      this.parentSubType,
      this.productName,
      this.contentForFullDescription,
      this.translateToString(this.shortSpecificationsEdit),
      this.contentForContentProduct,
      this.contentForAdditionalDescription,
      this.contentForImage
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
}

