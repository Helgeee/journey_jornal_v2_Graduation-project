import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home-page/home.component';
import { MyProfileComponent } from './page/profile-page/profile.component';
import { MyEmptyPage } from './core/empty-route/empty-route.component';
import { MyHeader } from './core/interface/header/header.component';
import {  LoginPageComponent } from './core/auth/login-page/login.component';

const routes: Routes = [
  // {
  //   path: 'login-page',  
  //   component: LoginPageComponent ,
  // },
  {
    path: 'header',  
    component: MyHeader ,
  },
  {
    path: 'home-page',
    component: HomeComponent ,
  },
  {
    path: 'profile-page',  
    component: MyProfileComponent,
  },
  
  {
    path: '**',
    component: MyEmptyPage,
  }, 
 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
