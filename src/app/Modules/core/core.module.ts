import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, CoreComponent]
})
export class CoreModule { }
