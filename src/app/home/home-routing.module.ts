import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeTableComponent } from "./home-table/home-table.component";

const routes: Routes = [
  {
    path: "",
    component: HomeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class HomeRoutingModule {}
