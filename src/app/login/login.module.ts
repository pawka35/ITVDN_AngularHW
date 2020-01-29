import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppModule } from '../app.module';
import { AlertComponent } from '../components/alert/alert.component';

@NgModule({
  declarations: [LoginPageComponent,AlertComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    
  ]
})
export class LoginModule { }
