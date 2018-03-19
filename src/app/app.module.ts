import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Feature Module
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { Page404Component } from './page404.component';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    // AuthModule,
    CoreModule,
    // DashboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
