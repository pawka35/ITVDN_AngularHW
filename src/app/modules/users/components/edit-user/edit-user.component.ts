import { Component, OnInit } from '@angular/core';
import {ApiService, User} from '../../../../shared/api.service';
import {ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
currentUser: User;
userForm: FormGroup;
statuses =  ['active', 'inactive'];
genders = ['male', 'female'];
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.activatedRoute.params.forEach((params: Params) => {
     // console.log(+params.id);
      if (!isNaN(+params.id)) {
        this.api.getUser(+params.id)
          .subscribe(res => {
            this.currentUser = res.result;
            this.userForm.controls['email'].setValue(this.currentUser.email);
            this.userForm.controls['firstName'].setValue(this.currentUser.first_name);
            this.userForm.controls['lastName'].setValue(this.currentUser.last_name);
            this.userForm.controls['phone'].setValue(this.currentUser.phone);
            this.userForm.controls['website'].setValue(this.currentUser.website);
            this.userForm.controls['address'].setValue(this.currentUser.address);
            this.userForm.controls['userStatus'].setValue(this.currentUser.status);
            this.userForm.controls['gender'].setValue(this.currentUser.gender);

            console.log(this.currentUser);
          });
      }

      this.userForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        website: ['', [Validators.required]],
        address: ['', [Validators.required]],
        userStatus: [''],
        gender: ['']
      });
      console.log(this.userForm);
    });
  }

  compileUser() {
    this.currentUser.first_name = this.userForm.value.firstName;
    this.currentUser.last_name = this.userForm.value.lastName;
    this.currentUser.phone = this.userForm.value.phone;
    this.currentUser.website = this.userForm.value.website;
    this.currentUser.address = this.userForm.value.address;
    this.currentUser.status = this.userForm.value.userStatus;
    this.currentUser.gender = this.userForm.value.gender;
  }

  sendEdited() {

    this.compileUser();
    this.api.sendUserInfo(this.currentUser)
      .subscribe(res => {
        if (res['_meta']['success']) {
          alert('all done');
        } else {
          alert('Something go wrong. Try again!');
        }
      });
  }

  addUser() {
    const newUser: User = {
      first_name: this.userForm.value.firstName,
      last_name: this.userForm.value.lastName,
      phone: this.userForm.value.phone,
      website: this.userForm.value.website,
      address: this.userForm.value.address,
      status: this.userForm.value.userStatus,
      gender: this.userForm.value.gender,
      email: this.userForm.value.email,
      id: null,
      dob: null,
      _links: null
    };

    this.api.addUser(newUser)
      .subscribe(res => {
        if (!res['_meta']['success']){
          alert(res['_meta']['message']);
        } else {
          alert('User added! Id:'+res['result']['id']);
        }
        console.log(res);
      });
  }
}
