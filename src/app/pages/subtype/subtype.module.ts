import { NgModule } from '@angular/core';

import { SubtypeRoutingModule } from './subtype-routing.module';

import { SubtypeComponent } from './subtype.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { TableSubTypeComponent } from './table-subtype/table-subtype.component';
import { AddSubTypeComponent } from './add-subtype/add-subtype.component';


import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { EditSubTypeComponent } from './edit-subtype/edit-subtype.component';
import { RemoveSubTypeComponent } from './remove-subtype/remove-subtype.component';
import { ChoiceParentTypeComponent } from './add-subtype/choice-parentType/choice-parentType.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { ChoiceParentTypeToEditSubTypeComponent } from './edit-subtype/choice-parentTypeToEditSubType/choice-parentTypeToEditSubType.component';




@NgModule({
  declarations: [SubtypeComponent, 
    TableSubTypeComponent,
     AddSubTypeComponent,
     EditSubTypeComponent, 
     RemoveSubTypeComponent, 
     ChoiceParentTypeComponent,
     ChoiceParentTypeToEditSubTypeComponent,
    ],
  exports: [SubtypeComponent],
  imports: [SubtypeRoutingModule,
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
          NzCascaderModule
          

   ]

})
export class SubtypeModule { }
