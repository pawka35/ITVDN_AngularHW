import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-alert',
  templateUrl: './my-alert.component.html',
  styleUrls: ['./my-alert.component.scss']
})
export class MyAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  text: string;
}
