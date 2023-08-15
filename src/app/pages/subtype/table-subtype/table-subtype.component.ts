import { Component, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-table-subtype',
  templateUrl: './table-subtype.component.html',
  styleUrls: ['./table-subtype.component.css']
})
export class TableSubTypeComponent implements OnInit{

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;
  listOfData: VirtualDataInterface[] = [];
  
  constructor(private service: RestService) { }

  dataSubType:ItemType[] = [];
  dataTypeAndSubType:ItemTypeAndSubType[]=[];
 
  ngOnInit(): void {
        
     this.service.getDataTypes().subscribe(subType=> {
       this.dataSubType = subType;

        this.dataSubType.forEach(data=>{
          data.subTypes.forEach(          
            itemSubType=>{
            this.dataTypeAndSubType.push({nameSubType:itemSubType.name, nameParentType:data.name})
          })
        })
     });
  }

}


interface ItemType {
  name: string;
  subTypes:ItemSubType[];
}

interface ItemSubType {
  name: string;
  products:[]; 
}

interface ItemTypeAndSubType{
  nameSubType: string;
  nameParentType: string;
}

export interface VirtualDataInterface {
}