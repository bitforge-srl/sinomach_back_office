import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/types' },
  { path: 'types', loadChildren: () => import('./pages/type/type.module').then(m => m.TypeModule) },
  { path: 'subtypes', loadChildren: () => import('./pages/subtype/subtype.module').then(m => m.SubtypeModule) },
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
