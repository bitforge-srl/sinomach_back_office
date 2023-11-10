import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./service/authGard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {
    path: 'types', loadChildren: () => import('./pages/type/type.module').then(m => m.TypeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'subtypes', loadChildren: () => import('./pages/subtype/subtype.module').then(m => m.SubtypeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
