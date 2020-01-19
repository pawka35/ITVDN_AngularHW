import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeTableComponent } from './home-table/home-table.component';


@NgModule({
  declarations: [HomeTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { 

  
}
