import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from "@angular/core";
import { isDefined } from '@angular/compiler/src/util';
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.scss"]
})

export class MyTableComponent implements OnInit {
  @Input()
  rows: number; //принимает кол-во строк в таблице
  categories; //какие у нас есть категории
 
  Products = [ //инициализируем наш набор данных
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

  currentTable; //текущая таблица, в нее вносим данные, согласно фильтров
  currentCategory; //текущая выбранная категория
  public newName: FormControl; //для добавления новых записей
  public newPrice: FormControl;
  newItemCat:FormControl;

  @Output()//это осталось с предыдущего задания
  delete: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() { //инициализация компонента
    this.currentTable = this.Products.slice(0, this.rows);//снчала показываем все данные
    this.categories = [...new Set(this.Products.map(x => x.Category))]; //выбираем какие катеории у нас есть
    this.currentCategory="Все категории";
    this.newName = new FormControl();
    this.newPrice = new FormControl();
    this.newItemCat = new FormControl(1);
  }

  showTable() { //функция вывода таблицы при фильтрации, инициализации и пр.
    if (this.currentCategory!="Все категории"){ //если не выбрано показывать все категории
      //фильтруем наши данный, оставляем только с выбранной категорией
      this.currentTable  = this.Products.filter(x=>x.Category == this.currentCategory)
    } else { //иначе показываем все данные
      this.currentTable = this.Products};

    if (!isNaN(this.rows)){ //если выбрано сколько строк показывать
      //урезаем данные до количества выбранных строк
      this.currentTable = this.currentTable.slice(0,this.rows);
    }
  }

  selectCategory(category) {//выбираем категорию, затем отображаем страницу с учетом выбранной
    this.currentCategory = category;
    this.showTable();
  }

  del(id) { //удаляем строку (осталось с прошлого занятия)
    console.log(id);
    // this.Products = this.Products.filter(item => item.id != id);
    this.currentTable = this.currentTable.filter(item => item.id != id);

    this.delete.emit(id);
  }

  moreThan500(price: string): Boolean { //запршиваем больше ли цена чем 500? (чтобы покрасить в красный)
    if (parseFloat(price) > 500) {
      return true;
    } else {
      return false;
    }
  }

  chSel(val) { //изменение количества отображаемых строк
    this.rows = parseInt(val);
    this.showTable();
  }

  addnewItem(){ //добавление нового элемента в выборку
    this.Products.push({id: this.currentTable+2, name:this.newName.value,
       price: this.newPrice.value, Category: this.newItemCat.value});
    
       this.newName.setValue("");
       this.newPrice.setValue("");
       this.newItemCat.setValue("1");
  }
}
