import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './home-base/home-base.component';


const routes: Routes = [
  {path:"",
  component: HomeBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
