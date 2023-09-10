import { Component, Input } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { ItemSubType, ItemType } from '../../../interfaces/type';
import {AngularEditorConfig} from "@kolkov/angular-editor";


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

  productName:string = "";
  fullDescription:string="";
  shortSpecification:string="";
  content:string="";
  additionalDescription:string="";
  img:string="";

  parentTypeForSubType!:ItemType;

parentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    console.log("Received parentType", this.parentType);
  }

parentSubTypeSelected(selected: ItemSubType) {
    this.parentSubType = selected;
    console.log("Received parentSubType:", this.parentSubType);
  }


  constructor(private service: RestService) { }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    console.log("Output after Input", this.productName);
    console.log("Output after Input", this.fullDescription);
    console.log("Output after Input", this.shortSpecification);
    console.log("Output after Input", this.content);
    console.log("Output after Input", this.additionalDescription);
    console.log("Output after Input", this.img);

    this.productName = "";
    this.fullDescription="";
    this.shortSpecification="";
    this.content="";
    this.additionalDescription="";
    this.img="";

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
    response=>{
        if(response.success == true){
        console.log(response);
        this.reloadPage();
      }
      console.log(response);
     }
  );
      console.log("add SubType");
    this.productName = "";
    this.fullDescription="";
    this.shortSpecification="";
    this.content="";
    this.additionalDescription="";
    this.img="";
    }

  reloadPage() {
    window.location.reload();
  }
}
