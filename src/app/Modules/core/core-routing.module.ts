import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './Components/home/home.component';
import {CoreComponent} from './core.component';
import {ProductListComponent} from './Components/product-list/product-list.component';
import {ProductComponent} from './Components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'search',
        component: ProductListComponent
      },
      {
        path: 'product',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'product/:id',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
