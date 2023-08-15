import { Component, Input } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { ItemType } from '../../type/type';


@Component({
  selector: 'app-add-subtype',
  templateUrl: './add-subtype.component.html',
  styleUrls: ['./add-subtype.component.css']
})
export class AddSubTypeComponent {

  @Input()
  parentType!: ItemType;

  newSubTypeName: any

  onParentTypeSelected(selected: ItemType) {
    this.parentType = selected;
    console.log("Received parentTypeId:", this.parentType);
  }
   
addNewSubType() {
throw new Error('Method not implemented.');
}

  constructor(private service: RestService) { }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  
  addSubType(): void {
    console.log("addSubType");
    console.log(this.parentType);
    console.log(this.newSubTypeName);

  this.service.addNewSubType(this.parentType, this.newSubTypeName).subscribe(
    response=>{
      
      if(response.success == true){
        console.log(response);
        this.reloadPage();
      }
      console.log(response);
     }
  );
  
      console.log("add SubType");
    }

  reloadPage() {
    window.location.reload();
  }
}
