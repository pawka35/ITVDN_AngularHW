import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiService} from './shared/api.service';
import {InterceptorService} from './shared/interceptor.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { MissingTranslationService, HttpLoaderFactory } from './shared/translate.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: false,
    })
  ],
  providers: [ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    FormBuilder
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}



