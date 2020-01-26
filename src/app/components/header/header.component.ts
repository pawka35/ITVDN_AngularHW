import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginStatus: string;

  constructor(private _guarg: AuthGuardService) { }

  ngOnInit() {
  
  }

  ngAfterContentChecked(){
    this.loginStatus = this._guarg.checkStorage()?"LogOut":"LogIn";
  }


}
