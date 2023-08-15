import { NgModule } from '@angular/core';

import { TypeRoutingModule } from './type-routing.module';

import { TypeComponent } from './type.component';
import { TableComponent } from './table-type/table-type.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddTypeComponent } from './add-type/add-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoveComponent } from './remove-type/remove-type.component';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EditComponent } from './edit-type/edit-type.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';




@NgModule({
    declarations: [TypeComponent, TableComponent, AddTypeComponent, RemoveComponent, EditComponent],
    exports: [TypeComponent],
    imports: [TypeRoutingModule,
            NzTableModule,
            CommonModule,
            NzResizableModule,
            NzDrawerModule, 
            NzFormModule, 
            NzInputModule,
            NzSelectModule,
            NzDatePickerModule,
            NzIconModule,
            ReactiveFormsModule,
            FormsModule,
            NzModalModule,
            DragDropModule,
            MatTableModule,
            
            ],
        providers:[
            NzModalService,
        ]
        
})
export class TypeModule { }
