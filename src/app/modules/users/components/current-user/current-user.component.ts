import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ApiService, Post, User} from "../../../../shared/api.service";

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {

  currentUser: User;
  usersPosts: Array<Post>;
  constructor( private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
        this.api.getUser(+params.id)
          .subscribe(res => {
            this.currentUser = res.result;
            console.log(this.currentUser);
          });
        this.api.getUsersPosts(+params.id)
          .subscribe(res => {
            this.usersPosts = res.result;
          });
    });
  }

}
