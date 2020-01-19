import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeTableComponent } from './home-table/home-table.component';
import { MyTableComponent } from './my-table/my-table.component';
import { MyAlertComponent } from './my-alert/my-alert.component';


@NgModule({
  declarations: [HomeTableComponent, MyTableComponent, MyAlertComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { 

  
}
