import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { BaseuserComponent } from './components/baseuser/baseuser.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [UsersComponent,
    JwPaginationComponent,
    CurrentUserComponent,
    BaseuserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class UsersModule { }
