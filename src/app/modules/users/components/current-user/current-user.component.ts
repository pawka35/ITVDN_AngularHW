import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ApiService, Post, User} from '../../../../shared/api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  currentUser: User;
  usersPosts: Array<Post>;
  constructor( private activatedRoute: ActivatedRoute, private api: ApiService,
               private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.subscriptions.add(this.api.getUser(+params.id)
          .subscribe(res => {
            this.currentUser = res.result;
          }));

      this.subscriptions.add(this.api.getUsersPosts(+params.id)
          .subscribe(res => {
            this.usersPosts = res['result'];
          }));
    });
  }

  backToList() {
    this.router.navigate([''], {relativeTo: this.activeRoute});
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
