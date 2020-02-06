import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {People} from "../../classes/people";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ApiService} from "../../shared/services/api.service";
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['../add-people/add-people.component.scss']
})
export class EditPeopleComponent implements OnInit, OnDestroy {
@Input()
editedUser: People;
@Output()
outCloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output()
applyEditUser: EventEmitter<People> = new EventEmitter<People>();

  editForm: FormGroup;
  sub: Subscription;

  constructor(private _fb: FormBuilder, private _api: ApiService, private _alert: AlertService) {}

  ngOnInit() {
    this.sub = new Subscription();
    this.editForm = this._fb.group({
      name: this._fb.group({
        firstName: [this.editedUser.first_name, [Validators.required, Validators.minLength(2)]],
        lastName: [this.editedUser.last_name, [Validators.required, Validators.minLength(2)]]
      }),
      email: [this.editedUser.email, [Validators.required, Validators.email]],
      avatar: [''],
    });
  }

  applyUser() {
    this.editedUser.first_name = this.editForm.value.name.firstName;
    this.editedUser.last_name = this.editForm.value.name.lastName;
    this.editedUser.email = this.editForm.value.email;
    this.sub.add(this._api.changeUser(this.editedUser)
      .subscribe(res => {
        alert(`User update at ${res.updatedAt}! new name: ${res.name}`);
      })
    );
    this.applyEditUser.emit(this.editedUser);
    this.closeForm(true);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    //console.log('unsubscribe done!');
  }

  closeForm(act: boolean) {
    this.outCloseForm.emit(act);
  }
}
