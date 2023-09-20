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
    let out: { [key: string]: string } = {};
    massive.forEach(item => {
      out[item.name] = item.value;
    });
    return JSON.stringify(out);
  }

}
