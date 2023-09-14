import {Component, OnInit, ViewChild} from '@angular/core';
import {NzTableComponent} from 'ng-zorro-antd/table';
import {Subject, takeUntil} from 'rxjs';
import {ItemSubType, ItemType} from 'src/app/interfaces/type';
import {RestService} from 'src/app/service/rest.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html'
})
export class TableProductsComponent implements OnInit {

  @ViewChild('virtualTable', {static: false}) nzTableComponent?: NzTableComponent<ItemType>;
  private destroy$ = new Subject<boolean>();

  constructor(private service: RestService) {
  }

  dataTypes: ItemType[] = [];
  dataOfProducts: ItemDataProducts[] = [];
  itemOfProducts: ItemDataProducts[] = [];

  ngOnInit(): void {

    this.service.getDataTypes().subscribe(data => {
      this.dataTypes = data;
      console.log(data);
      this.dataTypes.forEach(type => {
        type.subTypes.forEach(subType => {
          subType.products.forEach(product => {
            this.itemOfProducts.push({
              id: product.id,
              name: product.name,
              typeName: type.name,
              subTypeName:subType.name,
              type: type,
              subType: subType,
            })
            this.dataOfProducts = this.itemOfProducts;
          });
        })
      })
    })
  }

}

interface ItemDataProducts {
  id: number;
  name: string;
  typeName: string;
  subTypeName: string;
  type: ItemType;
  subType: ItemSubType;
}







