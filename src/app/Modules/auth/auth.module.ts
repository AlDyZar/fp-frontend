import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {AuthComponent} from './auth.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthComponent, ForgotPasswordComponent]
})
export class AuthModule { }
