import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//сорри за название, не учел что angular-cli добавляем к имени сеирвиса слово Service
export class ProductServiseService {

  public Products = [ //инициализируем наш набор данных
    { id: 1, name: "product 1", price: 100, Category: 1 },
    { id: 2, name: "product 2", price: 200, Category: 2 },
    { id: 3, name: "product 3", price: 300, Category: 3 },
    { id: 4, name: "product 4", price: 400, Category: 1 },
    { id: 5, name: "product 5", price: 500, Category: 2 },
    { id: 6, name: "product 6", price: 600, Category: 3 },
    { id: 7, name: "product 7", price: 700, Category: 1 },
    { id: 8, name: "product 8", price: 800, Category: 2 },
    { id: 9, name: "product 9", price: 900, Category: 3 },
    { id: 10, name: "product 10", price: 1000, Category: 1 }
  ];
   
  get(){ // отдаем массив в компонент, который его запрашивает
    return this.Products;
  }
  
}
