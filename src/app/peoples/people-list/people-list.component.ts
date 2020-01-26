import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { People } from 'src/app/classes/people';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public Peoples: Array<People>=[];

  constructor(private _api: ApiService, private _router: Router, public _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Peoples  = this._api.getPeoples();
  }

  showPeople(id){
    //console.log(id);
    this._router.navigate([id],{relativeTo: this._activeRoute});
  }

}
