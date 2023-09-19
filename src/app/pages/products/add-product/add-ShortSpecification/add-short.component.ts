import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  shortSpecToString: string = "";

  @Output() changedShortSpecification: EventEmitter<any> = new EventEmitter<any>();


  addItem() {
    this.itemShortSpecifications.push({
      name: this.nameShortSpecification,
      value: this.valueOfShortSpecification
    });
    this.shortSpecifications = this.itemShortSpecifications;

    this.nameShortSpecification = "";
    this.valueOfShortSpecification = "";

    this.changedShortSpecification.emit(this.translateToString(this.shortSpecifications));
  }

  deleteItem(index: number) {
    if (index >= 0 && index < this.shortSpecifications.length) {
      this.shortSpecifications.splice(index, 1);
    }
    this.translateToString(this.shortSpecifications);
    this.changedShortSpecification.emit(this.translateToString(this.shortSpecifications));

  }

  translateToString(massive: ItemShortSpecification[]): string {
    let stringFromMassive = "{";
    for (let i = 0; i < massive.length; i++) {
      console.log(massive[i]);
      stringFromMassive = stringFromMassive + "\"" + massive[i].name + "\":\"" + massive[i].value + "\",";
    }
    if (massive.length > 0) {
      stringFromMassive = stringFromMassive.slice(0, -1) + "}";
    }
    return stringFromMassive;
  }

}
