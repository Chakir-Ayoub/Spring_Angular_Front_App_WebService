import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { EditAddressComponent } from './component/edit-address/edit-address.component';
import { ListAddressComponent } from './component/list-address/list-address.component';
import { NavbarComponent } from './component/partials/navbar/navbar.component';
import { PagesNotFoundComponent } from './component/partials/pages-not-found/pages-not-found.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    NavbarComponent,
    PagesNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
