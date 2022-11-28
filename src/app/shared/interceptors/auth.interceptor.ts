import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let tokenRequest = request.clone({
            setHeaders: {
                Authorization: `${localStorage.getItem('token')}`
            }
        });
        console.log('interceptor', localStorage.getItem('token'));
        return next.handle(localStorage.getItem('token') ? tokenRequest : request);
    }
}
