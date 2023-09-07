import {Component} from '@angular/core';
import {ItemShortSpecification} from "../../../../interfaces/type";

@Component({
  selector: 'app-add-short',
  templateUrl: './add-short.component.html',
  styleUrls: ['./add-short.component.css']
})
export class AddShortComponent {
  nameShortSpecification: string = "";
  valueOfShortSpecification: string = "";

  shortSpecifications: ItemShortSpecification[] = [];
  itemShortSpecifications: ItemShortSpecification[] = [];

  addItem() {
    this.itemShortSpecifications.push({name: this.nameShortSpecification, value: this.valueOfShortSpecification});
    this.shortSpecifications = this.itemShortSpecifications;

    this.nameShortSpecification = "";
    this.valueOfShortSpecification = "";
  }

  deleteItem() {
    console.log(this.shortSpecifications)
    let find = this.shortSpecifications.find(item => {
      item.name === this.nameShortSpecification
    })?.name;
    console.log(find)

  }
}
