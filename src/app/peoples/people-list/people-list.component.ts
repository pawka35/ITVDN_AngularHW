import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { People } from 'src/app/classes/people';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  Peoples: Array<People>;
  @Input()
  addNewPeople;
  editedUser: People;

  constructor(private _api: ApiService, private _router: Router, public _activeRoute: ActivatedRoute) { }

ngOnInit() {
    this.Peoples = new Array<People>();
    this._api.getPeoples()
      .subscribe(res => {
        console.log(res.data);
        res.data.forEach(element => {
          this.Peoples.push(
            new People(
              element.id,
              element.email,
              element.first_name,
              element.last_name,
              element.avatar
            )
          );
        });
      });
  }

  showPeople(id) {
    this._router.navigate([id],{relativeTo: this._activeRoute});
  }

  hereNewUser(newPeole: People) {
    this.Peoples.push(newPeole);
    this.addNewPeople = false;
  }

  checkAuth() {
    return this._api.getToken();
  }

  delUser(id: number) {
    this._api.deletUser(id)
      .subscribe(res => {
        if (res.status === 204) {
          this.Peoples = this.Peoples.filter((item) => item.id !== id);
        } else {
          alert(`Cant delete user with id ${id}`);
        }});
    this._router.navigate(['/peoples'], );
  }

  changeUser(id: number) {
    this.editedUser = this.Peoples.filter(x => x.id === id)[0];
  }


  closeEditForm($event: boolean) {
    this.editedUser = null;
  }

  applyEditUser(editedUser: People) {
    this.Peoples[editedUser.id].email = editedUser.email;
    this.Peoples[editedUser.id].last_name = editedUser.last_name;
    this.Peoples[editedUser.id].first_name = editedUser.first_name;
    this.Peoples[editedUser.id].avatar = editedUser.avatar;
    this._router.navigate(['/peoples'], );
  }
}
