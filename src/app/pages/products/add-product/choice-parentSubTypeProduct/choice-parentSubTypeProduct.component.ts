import {JsonPipe} from '@angular/common';
import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {AllNameType, ItemSubType, ItemType} from 'src/app/interfaces/type';
import {RestService} from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentSubTypeProduct',
  templateUrl: './choice-parentSubTypeProduct.component.html',
  styleUrls: ['./choice-parentSubTypeProduct.component.css'],
})

export class ChoiceParentSubTypeOfProductComponent {

  @Input() parentType!: ItemType;

  @Output() parentSubTypeSelected = new EventEmitter<ItemSubType>();

   menuItems: AllNameType[] = [];

  dataSubTypeForChoice: ItemSubType[] = [];

  selectedOption: number | null = null;

  parentTypeId: number | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if ('parentType' in changes) {
      this.menuItems = [];
      const newParentType = changes['parentType'].currentValue;
      if (newParentType) {
        this.parentType.subTypes.forEach(subType => {
            if (subType.name === "default") {
              subType.name = "no SybType";
              this.selectedOption = subType.id;
            }
            const item: AllNameType = {
              name: subType.name,
              value: subType.id,
            }

            this.menuItems.push(item);
          }
        )
      }
    }
  }


  onOptionSelect(value: number): void {
    this.selectedOption = value;

    const selectedSubType = this.parentType.subTypes.find(subtype => subtype.id === this.selectedOption);
    if (selectedSubType) {
      this.parentSubTypeSelected.emit(selectedSubType);
    }
  }
}

