import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AllNameType, ItemType} from 'src/app/interfaces/type';
import {RestService} from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-typeForEditProduct',
  templateUrl: './choice-typeForEditProductProduct.component.html',
  styleUrls: ['./choice-typeForEditProductProduct.component.css'],
})

export class ChoiceTypeForEditProductProductComponent {

  @Output() parentTypeSelected = new EventEmitter<ItemType>();

  constructor(private service: RestService) {
  }

  menuItems: AllNameType[] = [];

  dataTypeForChoice: ItemType[] = [];

  @Input() selectedOption: number | undefined;


  ngOnInit(): void {
    this.service.getDataTypes().subscribe(type => {

      this.dataTypeForChoice = type;

      this.dataTypeForChoice.forEach(type => {
        const nameType: AllNameType = {
          name: type.name,
          value: type.id,
        }
        this.menuItems.push(nameType);
      });
    });
  }

  onOptionSelect(value: number): void {

    const selectedType = this.dataTypeForChoice.find(type => type.id === this.selectedOption);
    if (selectedType) {
      this.parentTypeSelected.emit(selectedType);
    }
  }
}

