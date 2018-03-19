import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
