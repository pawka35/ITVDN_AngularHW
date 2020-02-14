import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService, User} from '../../../../shared/api.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, Subscription} from "rxjs";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  items = [];
  users: Array<User>;
  pageSize: number;
  genres: Array<string>;
  statuses: Array<string>;
  needPage: number;
  genre: string;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions.add(this.api.getUserList().subscribe(res => {
       this.users = res.result;
       this.items = Array(res._meta.totalCount).fill(0).map((x, i) => ({ id: (i + 1)}));
       this.pageSize = res._meta.perPage;
       this.genres = [...new Set(this.users.map(x => x.gender))];
       this.statuses = [...new Set(this.users.map(x => x.status))];
    }));
  }

  onChangePage(page: []) {
    const tmp: any = page.slice(-1);
    if (!!tmp[0]) {
      this.needPage = tmp[0].id / this.pageSize; //это хитрое колдунство, вычисляющее на какую страницу кликнули
    }
    this.getUserList();
  }

  getUserList() {
    this.subscriptions.add(this.api.getUserList(this.needPage,
      this.genre,
      this.status,
      this.firstName,
      this.lastName,
      this.email,
      this.phone).subscribe(res => {
      this.users = res.result;
    }));
  }

  genreChange($event: any) {
    this.genre = $event.target.value;
    this.getUserList();
  }

  statusChange($event: any) {
    this.status = $event.target.value;
    this.getUserList();
  }

  showUser(id: number) {
    this.router.navigate([id], {relativeTo: this.activeRoute});
  }

  editUser(id: number) {
    this.router.navigate([`edit/${id}`], {relativeTo: this.activeRoute});
  }

  addNewUser() {
    this.router.navigate([`edit/new`], {relativeTo: this.activeRoute});
  }

  deleteUser(id: number) {
    this.subscriptions.add(this.api.deleteUser(id)
      .subscribe(res => {
        if (res["_meta"]["success"]){
          alert(`user with id: ${id} was deleted!`);
        } else {
          alert(`Something go wrong`);
        }
      }));
    this.getUserList();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

