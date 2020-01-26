import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import {People} from "../../classes/people";
import { from } from 'rxjs';

@Component({
  selector: 'app-people-current',
  templateUrl: './people-current.component.html',
  styleUrls: ['./people-current.component.scss']
})
export class PeopleCurrentComponent implements OnInit {

  constructor(private _api: ApiService, private _activatedRoute: ActivatedRoute) { }
  
  CurrentPeople: People;

  ngOnInit() {
    this._activatedRoute.params.forEach((params:Params)=>{
     this.CurrentPeople = this._api.getCurrentPeople(+params["id"])
    //  console.log(this.CurrentPeople);
    });
  }

}
