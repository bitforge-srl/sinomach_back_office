import { NgModule } from '@angular/core';

import { SubtypeRoutingModule } from './subtype-routing.module';

import { SubtypeComponent } from './subtype.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { TableSubTypeComponent } from './table-subtype/table-subtype.component';

@NgModule({
  imports: [SubtypeRoutingModule,NzTableModule, CommonModule ],
  declarations: [SubtypeComponent, TableSubTypeComponent],
  exports: [SubtypeComponent]
})
export class SubtypeModule { }
