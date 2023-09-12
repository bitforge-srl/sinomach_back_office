import {Component, Input} from '@angular/core';
import {ItemShortSpecification} from "../../../../interfaces/type";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-short',
  templateUrl: './add-short.component.html',
  styleUrls: ['./add-short.component.css']
})
export class AddShortComponent {

  @Input() shortSpecification: FormControl | undefined;

  nameShortSpecification: string = "";
  valueOfShortSpecification: string = "";

  shortSpecifications: ItemShortSpecification[] = [];
  itemShortSpecifications: ItemShortSpecification[] = [];

  addItem() {
    this.itemShortSpecifications.push({
      name: this.nameShortSpecification,
      value: this.valueOfShortSpecification
    });
    this.shortSpecifications = this.itemShortSpecifications;

    this.nameShortSpecification = "";
    this.valueOfShortSpecification = "";
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.shortSpecifications.length) {
      this.shortSpecifications.splice(index, 1);
    }
    console.log("array", this.shortSpecifications);
    console.log("sting", this.shortSpecification);

  }
}
