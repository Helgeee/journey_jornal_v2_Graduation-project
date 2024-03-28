import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page/login.component";
import { RegisterComponent } from "./register-page/register.component";

@NgModule({
    imports: [CommonModule, LoginPageComponent , RegisterComponent ] ,
    declarations: [ LoginPageComponent, RegisterComponent]
})
export class AuthModule {}