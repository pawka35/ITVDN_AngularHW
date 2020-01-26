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
},
{
  path:"admin",
  loadChildren: ()=>import("../app/admin/admin.module").then(m=>m.AdminModule)
},
{
  path:"login",
  loadChildren: ()=>import("../app/login/login.module").then(m=>m.LoginModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
