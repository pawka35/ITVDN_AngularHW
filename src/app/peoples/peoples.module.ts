import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCurrentComponent } from './people-current/people-current.component';


@NgModule({
  declarations: [PeopleListComponent, PeopleCurrentComponent],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }
