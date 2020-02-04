import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCurrentComponent } from './people-current/people-current.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {myHttpInterceptor} from '../shared/services/myHttp.interceptor';
import { AddPeopleComponent } from './add-people/add-people.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PeopleListComponent, PeopleCurrentComponent, AddPeopleComponent, AddPeopleComponent],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: myHttpInterceptor, multi: true}]
})
export class PeoplesModule { }
