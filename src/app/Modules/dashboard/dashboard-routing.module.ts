import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {DashboardComponent} from './dashboard.component';
import {AccountComponent} from './Components/account/account.component';
import {TransactionComponent} from './Components/transaction/transaction.component';
import {HistoryComponent} from './Components/history/history.component';
import {CartComponent} from './Components/cart/cart.component';

import {AuthGuardService} from '../../Services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'transaction',
        component: TransactionComponent
      },
      // {
      //   path: 'cart',
      //   component: CartComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
