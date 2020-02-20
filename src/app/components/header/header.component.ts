import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle: string;
  time: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.use(environment.defaultLocale);
    this.headerTitle = "Home Work #9. Itvdn front-end course";
    this.time = new Date(Date.now()).toLocaleString("ru-RU");
    this.changeTime();

  }

  changeTime(){
    setInterval(()=>{
      this.time = new Date(Date.now()).toLocaleString("ru-RU");
    },1000)
  }

}
