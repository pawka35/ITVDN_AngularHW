import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api.service";
import { People } from "src/app/classes/people";
import { Subscription } from "rxjs";
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: "app-home-base",
  templateUrl: "./home-base.component.html",
  styleUrls: ["./home-base.component.scss"]
})
export class HomeBaseComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  sub: Subscription;

  constructor(private _fb: FormBuilder, private _api: ApiService, private _alert: AlertService) {}

  ngOnInit() {
    this.sub = new Subscription();
    this.userForm = this._fb.group({
      name: this._fb.group({
        firstName: ["", [Validators.required, Validators.minLength(2)]],
        lastName: ["", [Validators.required, Validators.minLength(2)]]
      }),
      email: ["", [Validators.required, Validators.email]],
      avatar: [""],
      agree: [false, [Validators.requiredTrue]]
    });

    // console.log(this.userForm);
  }

  submit() {
    //console.log(this.userForm.value.name.firstName);
    let newPeople = new People(
      this._api.getLastId() + 1,
      this.userForm.value.email,
      this.userForm.value.name.firstName,
      this.userForm.value.name.lastName,
      // this.userForm.value.avatar
      //посколь картинки некуда загружать, берем просто из интернета
      "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2375/cache/2020/01/spy-clipart-9-e1538678193587/2613749646.png"
    );

    this.sub.add(
      this._api.addPeople(newPeople).subscribe(res => {
        console.log(res);
        //this._alert.showAlert(`${res} \r\n Look it on page 'Peoples' `);
       alert(`${res} \r\n Look it on page 'Peoples' `);
        this.userForm.reset();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log("unsubscribe done!");
  }
}
