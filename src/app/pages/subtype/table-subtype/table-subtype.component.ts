import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {RestService} from 'src/app/service/rest.service';
import {ItemSubType, ItemTypeAndSubType, ItemTypeForSubType} from '../../../interfaces/type';


@Component({
  selector: 'app-table-subtype',
  templateUrl: './table-subtype.component.html',
  styleUrls: ['./table-subtype.component.css']
})
export class TableSubTypeComponent implements OnInit {

  @ViewChild('virtualTable', {static: false}) nzTableComponent?: NzTableComponent<ItemTypeAndSubType>;

  default = "default";

  constructor(private service: RestService) {
  }

  dataTypes: ItemTypeForSubType[] = [];
  dataTypeAndSubType: ItemTypeAndSubType[] = [];


  ngOnInit(): void {

    this.service.getDataTypes().subscribe(types => {
      this.dataTypes = types;
      this.dataTypes.forEach(data => {
        data.subTypes.forEach(
          itemSubType => {
            this.dataTypeAndSubType.push({
              subtypeId: itemSubType.id,
              typeId: data.id,
              nameSubType: itemSubType.name,
              nameParentType: data.name
            })
          })

      });
    });
  }

}
