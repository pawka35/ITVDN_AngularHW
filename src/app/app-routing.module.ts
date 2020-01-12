import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FakeUsersComponent } from './components/fake-users/fake-users.component';

const routes: Routes = [
  { path: "", component: FakeUsersComponent},
  { path: "contacts", component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
