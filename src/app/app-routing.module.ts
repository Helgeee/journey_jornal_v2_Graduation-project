import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './core/profile/profile.component';
import { MyEmptyPage } from './core/empty-route/empty-route.component';
import { MyHeader } from './core/interface/header/header.component';

const routes: Routes = [
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
