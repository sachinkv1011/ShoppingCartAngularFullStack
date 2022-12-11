import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAdminProductComponent } from './view-admin-product/view-admin-product.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewUserProductComponent } from './view-user-product/view-user-product.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userReg",
    component:UserRegComponent
  },
  {
    path:"addProduct",
    component:AddProductComponent
  },
  {
    path:"viewAdminProduct",
    component:ViewAdminProductComponent
  },
  {
    path:"viewUserProduct",
    component:ViewUserProductComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    AddProductComponent,
    ViewAdminProductComponent,
    AdminNavbarComponent,
    ViewUserProductComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
