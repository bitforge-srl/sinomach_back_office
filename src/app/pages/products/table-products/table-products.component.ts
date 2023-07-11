import { Component, OnInit, ViewChild } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html'
})
export class TableProductsComponent implements OnInit {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;
  private destroy$ = new Subject<boolean>();
  listOfData: VirtualDataInterface[] = [];
 
   constructor(private service: RestService) { }
  
  dataType:ItemType[] = [];
  dataOfProducts: ItemProduct[] = [];

  ngOnInit(): void {
    
    this.service.getDataTypes().subscribe(data=>{
      this.dataType = data;
        console.log(data);
      this.dataType.forEach(type=>{
        type.subTypes.forEach(subType=>{
          subType.products.forEach(product=>{
            
            console.log(product);
            
            this.dataOfProducts.push({name: product.name, 
            type: type.name,
            subType: subType.name
            })
          });
        })
      })
    })
  }
  
}
  
export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

  interface ItemType {
    name: string;
    subTypes:ItemSubType[];
  }
  
  interface ItemSubType {
    name: string;
    products:ItemProduct[]; 
  }

  interface ItemProduct {
    name: string;
    type: string;
    subType: string
  }





  

