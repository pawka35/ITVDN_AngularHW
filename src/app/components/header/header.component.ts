import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerTitle: string;
  time: string;

  constructor() { }

  ngOnInit() {
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
