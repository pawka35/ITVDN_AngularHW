import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductServiseService } from "./services/product-servise.service";

let data = {
  get: () => {
    let tmp: ProductServiseService = new ProductServiseService();
    return tmp.get();
  }
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  /*для демонстрации решения задания 1 раскоментировать строку ниже, закоментировать следующую, 
  также закоментировать let data ={....} (опционально) */
  // providers: [ProductServiseService]
  providers: [{ provide: ProductServiseService, useValue: data }]
})
export class SharedModule {}
