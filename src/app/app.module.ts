import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { from } from 'rxjs';
import { FakeUsersComponent } from './components/fake-users/fake-users.component';
import { ContactsComponent } from './components/contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FakeUsersComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
