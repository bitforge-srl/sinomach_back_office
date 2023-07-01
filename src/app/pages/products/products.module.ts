import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';

import { ProductsRoutingModule } from './products-routing.module';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { TableProductsComponent } from './table-products/table-products.component';

@NgModule({
  imports: [ProductsRoutingModule, NzTableModule, CommonModule],
  declarations: [ProductsComponent,TableProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule { }
