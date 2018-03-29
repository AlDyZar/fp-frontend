import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CoreComponent } from './core.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, CoreComponent, BannerComponent, ProductComponent, ProductListComponent]
})
export class CoreModule { }
