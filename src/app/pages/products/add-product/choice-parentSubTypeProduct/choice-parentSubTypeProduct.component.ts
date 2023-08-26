import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { AllNameType, ItemSubType, ItemType } from 'src/app/interfaces/type';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-choice-parentSubTypeProduct',
  templateUrl: './choice-parentSubTypeProduct.component.html',
  styleUrls: ['./choice-parentSubTypeProduct.component.css'],
})

export class ChoiceParentSubTypeOfProductComponent {

  @Input() parentType!:ItemType;

  @Output() parentSubTypeSelected = new EventEmitter<ItemSubType>();

  constructor(private service: RestService) { }

  menuItems:AllNameType[] = [];

  dataSubTypeForChoice: ItemSubType[] = [];

  selectedOption: string | null = null;

  parentTypeId: number|undefined;

  ngOnChanges(changes: SimpleChanges){
    if ('parentType' in changes){
      const newParentType = changes['parentType'].currentValue;
      if (newParentType) {
        console.log("****************", this.parentType.subTypes);
       
        this.parentType.subTypes.forEach(subType=>{
          const item:AllNameType = {
             name: subType.name,
                        value: subType.name,
                       }
        
        this.menuItems.push(item);}
        )}
     }
   } 
  
      
  onOptionSelect(value: string): void {
    console.log(this.parentType);
    
    this.selectedOption = value;
    console.log(this.selectedOption);

    const selectedSubType = this.parentType.subTypes.find(subtype => subtype.name === this.selectedOption);
   if (selectedSubType) {
      this.parentSubTypeSelected.emit(selectedSubType);
    }
  }
 }

