import {JsonPipe} from '@angular/common';
import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {AllNameType, ItemSubType, ItemType} from 'src/app/interfaces/type';
import {RestService} from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-subTypeForEditProduct',
  templateUrl: './choice-subTypeForEditProductProduct.component.html',
  styleUrls: ['./choice-subTypeForEditProductProduct.component.css'],
})

export class ChoiceSubTypeForEditProductComponent {

  @Input() parentType!: ItemType;

  @Output() parentSubTypeSelected = new EventEmitter<ItemSubType>();

  constructor(private service: RestService) {
  }

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
    console.log(this.parentType);

    this.selectedOption = value;
    console.log(this.selectedOption);

    const selectedSubType = this.parentType.subTypes.find(subtype => subtype.id === this.selectedOption);
    if (selectedSubType) {
      this.parentSubTypeSelected.emit(selectedSubType);
    }
  }
}

