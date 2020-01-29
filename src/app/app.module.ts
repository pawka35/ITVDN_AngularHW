import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ApiService } from './shared/services/api.service';
import { FormBuilder} from '@angular/forms';
import { AlertService } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuardService, ApiService, FormBuilder,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
