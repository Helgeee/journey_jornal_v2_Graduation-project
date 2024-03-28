import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './core/auth/login-page/login.component';
import { HomeComponent } from './page/home-page/home.component';
import { MySideBar } from './core/interface/sidebar/sidebar.component';
import { MyHeader } from './core/interface/header/header.component';
import { SettingsComponent } from './page/settings-page/settings.component';
import { ButtonComponent } from './core/Decorators/button/button.component';
import { IndexPageComponent } from './page/index-page/index-page.component';
import { AuthLayoutComponent } from './core/auth/shared/layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    MySideBar,
    MyHeader,
    SettingsComponent,
    ButtonComponent,
    IndexPageComponent,
    AuthLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
