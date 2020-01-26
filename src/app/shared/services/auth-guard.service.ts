import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {

  async canActivate() {
    if (!this.checkStorage()){//если токена нет, то отправляем авторизовываться
      this._router.navigate(['/login']);  
    }else{
      return true; //если есть, то запускаем на объект
    }
  }

  checkStorage():boolean{
    return !!sessionStorage.getItem('token'); //проверяем есть ли токен
  }

  constructor(private _router: Router) {
  } 
}
