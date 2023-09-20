import {Component, Input} from '@angular/core';
import {RestService} from 'src/app/service/rest.service';
import {ItemType} from '../../../interfaces/type';


@Component({
  selector: 'app-add-subtype',
  templateUrl: './add-subtype.component.html',
  styleUrls: ['./add-subtype.component.css']
})
export class AddSubTypeComponent {

  @Input() parentType!: ItemType;

  newSubTypeName: any

  onParentTypeSelected(selected: ItemType) {
    this.parentType = selected;
  }

  constructor(private service: RestService) {
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  addSubType(): void {
    this.service.addNewSubType(this.parentType, this.newSubTypeName).subscribe(
      response => {
        if (response.success == true) {
          console.log(response);
          this.reloadPage();
        }
        console.log(response);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
