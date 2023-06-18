import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { EditAddressComponent } from './component/edit-address/edit-address.component';
import { ListAddressComponent } from './component/list-address/list-address.component';
import { NavbarComponent } from './component/partials/navbar/navbar.component';
import { PagesNotFoundComponent } from './component/partials/pages-not-found/pages-not-found.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpComponent } from './component/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PagesNotFoundComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
