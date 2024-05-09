import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Route, Router } from "@angular/router";
import { Toast, ToastrService } from "ngx-toastr";
import { IAuthUser, IUser } from "../types/user.interface";
import { API_URL } from "../constant/constants";
import { BehaviorSubject, catchError, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AuthService{
    
     isAuthSig = signal<boolean>(false) // отображение в системе или нет


    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly toastr: ToastrService
    ){
        const token = localStorage.getItem('token') // запрос токена
        this.isAuthSig.set(!!token)
    }

    //Регистрация

    signUp(userData: IAuthUser ) {
        return this.http.post(`${ API_URL }/user`, userData) ///запрос 
        .pipe(
            tap(() => {
                this.login(userData)
            }),

            catchError(err=>{ // ошибка
                this.handeError(err)
                throw new Error(err.message)
            })
        )
        .subscribe(() => this.toastr.success('created'))

    }

    //Вход в Систему
    login(userData: IAuthUser) {
        return this.http
        .post<IUser>(`${API_URL}/auth/login`, userData)
        .pipe(
            tap((res: IUser) => {
                localStorage.setItem( 'token', res.token)
                this.isAuthSig.set(true)
            }), //
        )
        .subscribe(() => {
            this.toastr.success('logged in')
            this.router.navigate(['/home']) ///при логине переход на home
        })

    }

    ///Выход из системы
        logout() {
            localStorage.removeItem('token')
            this.isAuthSig.set(false)
            this.router.navigate(['/login'])
            this.toastr.success('logged out')
        }


    private handeError(err: HttpErrorResponse): void {
        this.toastr.error(err.error.message)
    }

    //Отображение

}
