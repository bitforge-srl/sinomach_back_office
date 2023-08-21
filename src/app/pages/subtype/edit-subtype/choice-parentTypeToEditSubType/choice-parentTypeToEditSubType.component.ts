import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllNameType, ItemType } from 'src/app/pages/type/type';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentTypeToEditSubType',
  templateUrl: './choice-parentTypeToEditSubType.component.html',
  styleUrls: ['./choice-parentTypeToEditSubType.component.css'],
})

export class ChoiceParentTypeToEditSubTypeComponent {

  @Output() EditSelectedSubType = new EventEmitter<number>();

  constructor(private service: RestService) { }

  menuItems:AllNameType[] = [];
  dataTypeForChoice: ItemType[] = [];

  selectedOption: string | any;
  selectedTypeId: number| any;
  parentTypeId: number|undefined;
  selectedType: string | any;

  
  @Input() parentType: string | undefined = '';

  ngOnInit(): void {this.service.getDataTypes().subscribe(type=> {
    this.dataTypeForChoice = type;

    this.dataTypeForChoice.forEach(element => {
      const nameType:AllNameType={
        name: element.name,
        value: element.name,
      }
        this.menuItems.push(nameType);
        this.selectedOption = this.parentType;
    });      
    
  });
       }

    
  onOptionSelect(value: string): void {
    this.selectedOption = value;
    console.log("selectedOption"); 
    console.log(this.selectedOption);

    const selectedType = this.dataTypeForChoice.find(type => type.name === this.selectedOption);
    if (selectedType) {
      this.selectedTypeId = selectedType.id;
     
      this.EditSelectedSubType.emit(this.selectedTypeId);
    
    }
  }
 }

