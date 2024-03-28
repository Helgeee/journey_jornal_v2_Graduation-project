import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login-page/login.component';
import { HomeComponent } from './home/home.component';
import { MySideBar } from './core/interface/sidebar/sidebar.component';

import { MyHeader } from './core/interface/header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { NotefeedComponent } from './notefeed/notefeed.component';
import { ButtonComponent } from './core/Decorator/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MySideBar,
    MyHeader,
    SettingsComponent,
    NotefeedComponent,
    ButtonComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
