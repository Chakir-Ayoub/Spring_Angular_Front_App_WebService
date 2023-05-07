import { ListAddressComponent } from './component/list-address/list-address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EditAddressComponent } from './component/edit-address/edit-address.component';
import { LoginComponent } from './component/login/login.component';
import { PagesNotFoundComponent } from './component/partials/pages-not-found/pages-not-found.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
 {path:"",redirectTo:"/address",pathMatch:'full'},
 {path:"address",children:
 [
    {path:"",component:ListAddressComponent},
    {path:"create",component:AddAddressComponent},
    {path:"edit/:id",component:EditAddressComponent}
 ]
},
{path:"login",component:LoginComponent},
{path:"**",component:PagesNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }