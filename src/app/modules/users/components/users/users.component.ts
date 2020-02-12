import { Component, OnInit } from '@angular/core';
import {ApiService, User} from '../../../../shared/api.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
    this.api.getUserList().subscribe(res => {
       this.users = res.result;
       console.log(res._meta.totalCount);
       this.items = Array(res._meta.totalCount).fill(0).map((x, i) => ({ id: (i + 1)}));
       this.pageSize = res._meta.perPage;
       this.genres = [...new Set(this.users.map(x => x.gender))];
       this.statuses = [...new Set(this.users.map(x => x.status))];
    });
  }

  onChangePage(page: []) {
    const tmp: any = page.slice(-1);
    if (!!tmp[0]) {
      this.needPage = tmp[0].id / this.pageSize; //это хитрое колдунство, вычисляющее на какую страницу кликнули
    }
    this.getUserList();
  }

  getUserList() {
    this.api.getUserList(this.needPage,
      this.genre,
      this.status,
      this.firstName,
      this.lastName,
      this.email,
      this.phone).subscribe(res => {
      this.users = res.result;
    });
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
    console.log(id);
    this.router.navigate([id], {relativeTo: this.activeRoute});
  }
}

