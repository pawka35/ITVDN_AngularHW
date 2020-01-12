import { ThrowStmt } from "@angular/compiler";

export class FakeUser {
  constructor(userData) {
    console.log(userData);
    this.photo = userData["picture"]["large"];
    this.firstName = userData["name"]["first"];
    this.lastName = userData["name"]["last"];
    this.email = userData["email"];
    this.age = userData["dob"]["age"];
    this.phone = userData["phone"];
  }

  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  age: Number;
  phone: Number;
}
