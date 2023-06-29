import { NgModule } from '@angular/core';

import { SubtypeRoutingModule } from './subtype-routing.module';

import { SubtypeComponent } from './subtype.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [SubtypeRoutingModule],
  declarations: [SubtypeComponent, TableComponent],
  exports: [SubtypeComponent]
})
export class SubtypeModule { }
