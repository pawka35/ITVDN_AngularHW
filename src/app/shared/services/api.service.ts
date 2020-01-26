import { Injectable } from "@angular/core";
import { People } from "src/app/classes/people";
import { PeopleListComponent } from "src/app/peoples/people-list/people-list.component";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public Peoples: Array<People>;
  constructor() {}

  getPeoples():Array<People> {
    this.Peoples = new Array<People>(); //обнуляем перед новым запросом
      fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(res => {
       // console.log(res.data);
        res.data.forEach(element => {
          this.Peoples.push(
            new People(
              element.id,
              element.email,
              element.first_name,
              element.last_name,
              element.avatar
            )
          );
        });
      })
    .catch(er => console.log(er));
    // console.log(this.Peoples);
    return this.Peoples;
  }

  getCurrentPeople(id) {
    return this.Peoples.find(x=>x.id==id);
  }

  login(email: string, password: string){
    // let result: boolean;
    let data = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'email': email, 'password': password})
    }
   
    return fetch("https://cors-anywhere.herokuapp.com/https://reqres.in/api/login",data)
    // .then(res=> {
    //   console.log(res);
    //   return res.ok;
    // })
    .then(res=>res.json())
    .then(res=>{return res});
  }
 
}
