import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { API_URL } from "../constant/constants";

export class authinterceptor implements HttpInterceptor{
    constructor(){

    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler) {
            const token = localStorage.getItem('item')
            if(token){
                req = req.clone({
                    setHeaders:{
                        authorization: `Beaver ${token}`
                    },
                    url: `${API_URL}/${req.url}`,
                })
                
            }
            return next.handle(req)
        
    }
}