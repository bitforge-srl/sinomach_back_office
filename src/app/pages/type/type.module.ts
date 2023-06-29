import { NgModule } from '@angular/core';

import { TypeRoutingModule } from './type-routing.module';

import { TypeComponent } from './type.component';
import { TableComponent } from './table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [TypeComponent, TableComponent],
    exports: [TypeComponent],
    imports: [TypeRoutingModule, NzTableModule,CommonModule]
})
export class TypeModule { }
