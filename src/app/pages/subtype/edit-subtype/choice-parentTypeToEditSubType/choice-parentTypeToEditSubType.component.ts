import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AllNameType, ItemType} from 'src/app/interfaces/type';
import {RestService} from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentTypeToEditSubType',
  templateUrl: './choice-parentTypeToEditSubType.component.html',
  styleUrls: ['./choice-parentTypeToEditSubType.component.css'],
})

export class ChoiceParentTypeToEditSubTypeComponent {

  @Output() EditSelectedSubType = new EventEmitter<number>();

  constructor(private service: RestService) {
  }

  menuItems: AllNameType[] = [];
  dataTypeForChoice: ItemType[] = [];

  selectedOption: number | any;
  selectedTypeId: number | any;
  parentTypeId: number | undefined;
  selectedType: string | any;


  @Input() parentType: number | undefined = 0;

  ngOnInit(): void {
    console.log("ON init choice parent type to edit sub type")
    this.service.getDataTypes().subscribe(types => {
      this.dataTypeForChoice = types;

      this.dataTypeForChoice.forEach(type => {
        const nameType: AllNameType = {
          name: type.name,
          value: type.id,
        }
        this.menuItems.push(nameType);
            });

      this.selectedOption = this.parentType;
    });
  }


  onOptionSelect(value: number): void {
    console.log("selectedOption");
    console.log(this.selectedOption);

    const selectedType = this.dataTypeForChoice.find(type => type.id === this.selectedOption);
    if (selectedType) {
      this.selectedTypeId = selectedType.id;

      this.EditSelectedSubType.emit(this.selectedTypeId);

    }
  }
}

