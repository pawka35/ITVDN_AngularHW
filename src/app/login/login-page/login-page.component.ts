import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public loged: boolean;
  // public email: FormControl = new FormControl();
  // public password: FormControl = new FormControl();
  public loginForm: FormGroup;
 

  constructor(
    private _api: ApiService,
    private _guard: AuthGuardService,
    private _router: Router,
    private _fb: FormBuilder,
    private _alert: AlertService
  ) {}

  ngOnInit() {
    this.loged = this._guard.checkStorage(); //проверяем авторизованы или нет
    this.loginForm = this._fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }


  async login() {
    let res = await this._api.login(this.loginForm.value.email, this.loginForm.value.password);
    if (res.token) {
      console.log(res.token);
      sessionStorage.setItem("token", res.token);
      this._alert.showAlert(`Wellcome ${this.loginForm.value.email}`)
      setTimeout(() => {
        this._router.navigate(["/admin"]);
      }, 1500);
      
    } else {
      //alert("Incorrect email or password");
      this._alert.showAlert('Incorrect email or password');
      this.loginForm.reset();
    }
  }

  logout() {
    sessionStorage.removeItem("token");
    console.log("unAuth");
    this._alert.showAlert('Good bye!');
    setTimeout(() => {
      this._router.navigate([""]);
    }, 1500);
   

  }
}
//'email': 'eve.holt@reqres.in', 'password': 'cityslicka'
