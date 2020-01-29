import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  visible: boolean;
  text: string;

  constructor() {
    // this.visible = false;
    // this.text = "";
  
  }

  showAlert(text: string) {
    this.visible = true;
    this.text = text;
    
    setTimeout(() => {
      this.visible = false;
      this.text = "";
    }, 1000);

   
  }
}
