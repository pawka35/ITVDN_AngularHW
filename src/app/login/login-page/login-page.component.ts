import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public loged: boolean;
  public email: FormControl = new FormControl();
  public password: FormControl = new FormControl();

  constructor(
    private _api: ApiService,
    private _guard: AuthGuardService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loged = this._guard.checkStorage(); //проверяем авторизованы или нет
    // this.newName = new FormControl();
  }


  async login() {
    let res = await this._api.login(this.email.value, this.password.value);
    if (res.token) {
      console.log(res.token);
      sessionStorage.setItem("token", res.token);
      this._router.navigate(["/admin"]);
    } else {
      alert("Incorrect email or password");
      console.log(res.error);
    }
  }

  logout() {
    sessionStorage.removeItem("token");
    console.log("unAuth");
    this._router.navigate([""]);
  }
}
//'email': 'eve.holt@reqres.in', 'password': 'cityslicka'
