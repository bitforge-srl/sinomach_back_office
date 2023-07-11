import { Component ,OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-table-type',
  templateUrl: './table-type.component.html',
  styleUrls: ['./table-type.component.css']
})
export class TableComponent  implements OnInit{

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;
  listOfData: VirtualDataInterface[] = [];

constructor(private service: RestService) { }

 dataType:ItemType[] = [];

 ngOnInit(): void {
       
    this.service.getDataTypes().subscribe(type=> {
      this.dataType = type;
      console.log(this.dataType);
    });
   
   
  }

}

interface ItemType {
  name: string;
  subtypes:ItemSubType[];
}

interface ItemSubType {
  name: string;
  products:[]; 
}

export interface VirtualDataInterface {
}
