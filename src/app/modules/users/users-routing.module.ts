import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrentUserComponent} from './components/current-user/current-user.component';
import {BaseuserComponent} from './components/baseuser/baseuser.component';
import {UsersComponent} from './components/users/users.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: BaseuserComponent,
    children: [
      {path: '', component: UsersComponent},
      {path: ':id', component: CurrentUserComponent },
      {path: 'edit/:id', component: EditUserComponent},
     // {path: 'new', component: EditUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
