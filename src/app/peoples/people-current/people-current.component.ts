import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import {People} from '../../classes/people';


@Component({
  selector: 'app-people-current',
  templateUrl: './people-current.component.html',
  styleUrls: ['./people-current.component.scss']
})

export class PeopleCurrentComponent implements OnInit {
  CurrentPeople: People;
  constructor(private _api: ApiService, private _activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      this._api.getCurrentPeople(+params.id)
        .subscribe(res => {
          this.CurrentPeople = {
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email,
            avatar: res.data.avatar
          };
        });
    });
  }
}
