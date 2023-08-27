import { Component, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';
import { ItemSubType, ItemType } from 'src/app/interfaces/type';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html'
})
export class TableProductsComponent implements OnInit {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<ItemType>;
  private destroy$ = new Subject<boolean>();
 
   constructor(private service: RestService) { }
  
  dataTypes:ItemType[] = [];
  dataOfProducts: ItemDataProducts[] = [];

  ngOnInit(): void {
    
    this.service.getDataTypes().subscribe(data=>{
      this.dataTypes = data;
        console.log(data);
      this.dataTypes.forEach(type=>{
        type.subTypes.forEach(subType=>{
          subType.products.forEach(product=>{
          this.dataOfProducts.push({
            id: product.id,
            name: product.name,
            type:type.name,
            subType:subType.name,
            startType:type,
            startSubType:subType
          })
          });
        })
      })
    })
  }
  
}
   
  interface ItemDataProducts{
    id:number;
    name: String;
    type: string;
    subType: string;
    startType: ItemType;
    startSubType:ItemSubType
  }





  

