import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';

import { ProductsRoutingModule } from './products-routing.module';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { TableProductsComponent } from './table-products/table-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { ChoiceParentTypeOfProductComponent } from './add-product/choice-parentTypeProduct/choice-parentTypeProduct.component';
import { ChoiceParentSubTypeOfProductComponent } from './add-product/choice-parentSubTypeProduct/choice-parentSubTypeProduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ChoiceTypeForEditProductProductComponent } from './edit-product/choice-typeForEditProductProduct/choice-typeForEditProductProduct.component';
import { ChoiceSubTypeForEditProductComponent } from './edit-product/choice-subTypeForEditProductProduct/choice-subTypeForEditProductProduct.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {AddShortComponent} from "./add-product/add-ShortSpecification/add-short.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzUploadModule} from "ng-zorro-antd/upload";


@NgModule({
  imports: [ProductsRoutingModule,
    NzTableModule,
    CommonModule,
    FormsModule,
    NzResizableModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule,
    ReactiveFormsModule,
    NzModalModule,
    NzCascaderModule,
    AngularEditorModule, NzCollapseModule, NzButtonModule, NzUploadModule
  ],

  declarations: [ProductsComponent,
    TableProductsComponent,
    AddProductComponent,
    ChoiceParentTypeOfProductComponent,
    ChoiceParentSubTypeOfProductComponent,
    RemoveProductComponent,
    EditProductComponent,
    ChoiceTypeForEditProductProductComponent,
    ChoiceSubTypeForEditProductComponent,
    AddShortComponent
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
