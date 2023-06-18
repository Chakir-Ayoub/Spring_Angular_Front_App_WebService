import { ListAddressComponent } from './component/list-address/list-address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EditAddressComponent } from './component/edit-address/edit-address.component';
import { LoginComponent } from './component/login/login.component';
import { PagesNotFoundComponent } from './component/partials/pages-not-found/pages-not-found.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
 {path:"",redirectTo:"/address",pathMatch:'full'},
 {path:"sign_up",component:SignUpComponent},
 {path:"address",children:
 [
    {path:"",component:ListAddressComponent},
    {path:"create",component:AddAddressComponent},
    {path:"edit/:id",component:EditAddressComponent}
 ],canActivate:[AuthGuard]
},
{path:"login",component:LoginComponent,canActivate:[AfterAuthGuard]},
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
