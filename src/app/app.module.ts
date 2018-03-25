// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Root Component
import { AppComponent } from './app.component';

// Feature Module
import { AuthModule } from './Modules/auth/auth.module';
import { CoreModule } from './Modules/core/core.module';
import { DashboardModule } from './Modules/dashboard/dashboard.module';
import { Page404Component } from './Utils/Page404/page404.component';

// Services
import { RequestService } from './Services/request.service';
import {AuthService} from './Services/auth.service';
import {AuthGuardService} from './Services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [
    RequestService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
