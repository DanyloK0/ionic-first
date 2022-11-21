import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (localStorage.getItem('token')) {
        let tokenRequest = request.clone({
            setHeaders: {
                Authorization: `${localStorage.getItem('token')}`
            }
        });
        return next.handle(localStorage.getItem('token') ? tokenRequest : request);
        // }
        // else{
        //     this.router.navigate(['/auth/login']);
        //     return
        // }
    }
}
