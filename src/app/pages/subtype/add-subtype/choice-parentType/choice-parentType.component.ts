import { Component, EventEmitter, Output } from '@angular/core';
import { AllNameType, ItemType } from 'src/app/interfaces/type';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentType',
  templateUrl: './choice-parentType.component.html',
  styleUrls: ['./choice-parentType.component.css'],
})

export class ChoiceParentTypeComponent {

  @Output() parentTypeSelected = new EventEmitter<ItemType>();

  constructor(private service: RestService) { }

  menuItems:AllNameType[] = [];

  dataTypeForChoice: ItemType[] = [];

  selectedOption: number | null = null;

  parentTypeId: number|undefined;


  ngOnInit(): void {this.service.getDataTypes().subscribe(type=> {
    this.dataTypeForChoice = type;

    this.dataTypeForChoice.forEach(element => {
      const nameType:AllNameType={
        name: element.name,
        value: element.id,
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

