import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllNameType, ItemType } from 'src/app/interfaces/type';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-typeForEditProduct',
  templateUrl: './choice-typeForEditProductProduct.component.html',
  styleUrls: ['./choice-typeForEditProductProduct.component.css'],
})

export class ChoiceTypeForEditProductProductComponent {

  @Output() parentTypeSelected = new EventEmitter<ItemType>();

  constructor(private service: RestService) { }

  menuItems:AllNameType[] = [];

  dataTypeForChoice: ItemType[] = [];

  selectedOption: string | null = null;

  parentTypeId: number|undefined;


  ngOnInit(): void {this.service.getDataTypes().subscribe(type=> {
    
    this.dataTypeForChoice = type;
    
    this.dataTypeForChoice.forEach(type => {
      const nameType:AllNameType={
        name: type.name,
        value: type.name,
      }
        this.menuItems.push(nameType);
    });
  });
       }

  onOptionSelect(value: string): void {
    this.selectedOption = value;

    console.log(this.selectedOption);

    const selectedType = this.dataTypeForChoice.find(type => type.name === this.selectedOption);
    if (selectedType) {
      this.parentTypeSelected.emit(selectedType);
    }
  }
 }

