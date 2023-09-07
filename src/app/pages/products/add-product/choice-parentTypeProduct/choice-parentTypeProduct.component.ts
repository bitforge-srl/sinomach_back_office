import { Component, EventEmitter, Output } from '@angular/core';
import { AllNameType, ItemType } from 'src/app/interfaces/type';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentTypeProduct',
  templateUrl: './choice-parentTypeProduct.component.html',
  styleUrls: ['./choice-parentTypeProduct.component.css'],
})

export class ChoiceParentTypeOfProductComponent {

  @Output() parentTypeSelected = new EventEmitter<ItemType>();

  constructor(private service: RestService) { }

  menuItems:AllNameType[] = [];

  dataTypeForChoice: ItemType[] = [];

  selectedOption: number | null = null;

  parentTypeId: number|undefined;


  ngOnInit(): void {this.service.getDataTypes().subscribe(type=> {
    this.dataTypeForChoice = type;

    this.dataTypeForChoice.forEach(type => {
      const nameType:AllNameType={
        name: type.name,
        value: type.id,
      }
        this.menuItems.push(nameType);
    });
  });
       }

  onOptionSelect(value: number): void {
    this.selectedOption = value;
    console.log(this.selectedOption);

    const selectedType = this.dataTypeForChoice.find(type => type.id === this.selectedOption);
    if (selectedType) {
      this.parentTypeSelected.emit(selectedType);
    }
  }
 }

