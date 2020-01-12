import { Component, OnInit } from "@angular/core";
import { FakeUser } from "../../fake-user";
import { from } from "rxjs";

@Component({
  selector: "app-fake-users",
  templateUrl: "./fake-users.component.html",
  styleUrls: ["./fake-users.component.scss"]
})

export class FakeUsersComponent implements OnInit {
  fakeUser: FakeUser;

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    console.log("sdf");
    fetch("https://randomuser.me/api/", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.fakeUser = new FakeUser(res.results[0]);
      })
      .catch(err => console.log(err));
  }
}
