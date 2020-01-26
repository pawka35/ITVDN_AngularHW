import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeopleListComponent } from "./people-list/people-list.component";
import { PeopleCurrentComponent } from "./people-current/people-current.component";

const routes: Routes = [
  {
    path: "",
    component: PeopleListComponent,
    children: [
      { path: ":id", component: PeopleCurrentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule {}
