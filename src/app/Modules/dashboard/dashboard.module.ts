import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './Components/account/account.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CartComponent } from './Components/cart/cart.component';
import { HistoryComponent } from './Components/history/history.component';
import { TransactionComponent } from './Components/transaction/transaction.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, AccountComponent, NavigationComponent, CartComponent, HistoryComponent, TransactionComponent]
})
export class DashboardModule { }
