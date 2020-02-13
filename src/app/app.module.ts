import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiService} from './shared/api.service';
import {InterceptorService} from './shared/interceptor.service';
import {JwPaginationComponent} from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
