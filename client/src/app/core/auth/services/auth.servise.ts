import { Injectable } from "@angular/core";
import { User } from "../shared/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthServise {

    constructor(private http: HttpClient){

    }

    register() {}
    
    login(user: User) {
        
    }

    
}