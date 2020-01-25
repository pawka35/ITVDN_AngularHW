import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "",
  redirectTo: "/home",
  pathMatch:"full"
},
{
  path:"home",
  loadChildren: ()=>import("../app/home/home.module").then(m=>m.HomeModule)
},
{
  path:"peoples",
  loadChildren: ()=>import("../app/peoples/peoples.module").then(m=>m.PeoplesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
