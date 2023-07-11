import { NgModule } from '@angular/core';

import { TypeRoutingModule } from './type-routing.module';

import { TypeComponent } from './type.component';
import { TableComponent } from './table-type/table-type.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzResizableModule } from 'ng-zorro-antd/resizable';



@NgModule({
    declarations: [TypeComponent, TableComponent],
    exports: [TypeComponent],
    imports: [TypeRoutingModule, NzTableModule,CommonModule, NzResizableModule]
})
export class TypeModule { }
