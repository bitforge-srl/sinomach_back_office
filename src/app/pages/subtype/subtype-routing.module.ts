import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtypeComponent } from './subtype.component';

const routes: Routes = [
  { path: '', component: SubtypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubtypeRoutingModule { }
