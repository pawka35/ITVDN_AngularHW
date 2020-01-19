import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-table",
  templateUrl: "./home-table.component.html",
  styleUrls: ["./home-table.component.scss"]
})
export class HomeTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showalert:boolean = false;
  rowcount:number;
  delId:string;

  del(id) {
    console.log(`id ${id} was deleted!`);
    this.delId = `Id ${id} was deleted!`;
    this.showalert = true;
    setTimeout(()=>this.showalert=false,1000)
  }

  chSel(val){
    this.rowcount = parseInt(val);    
  }
}
