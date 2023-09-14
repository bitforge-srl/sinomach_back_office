import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ItemSubType, ItemType, ItemTypeAndSubType, ItemProduct} from '../../../interfaces/type';


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


        console.log(product)
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
      this.contentForShortSpecificationProduct,
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

}

