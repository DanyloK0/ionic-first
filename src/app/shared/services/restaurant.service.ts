import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { UtilityService } from "./utility.service";

@Injectable({
    providedIn: 'root' 
})
    export class RestaurantService {
        private apiUrl: string = 'https://apposto.nextre.it/dev/api/';
        // private apiUrl: string = 'https://apposto.nextre.it/sbb/api/';
        private requestResult: Subscription = new Subscription();

        constructor(
            private http: HttpClient,
        ) { }

        setConfig() {return new HttpHeaders({})};

        getRestaurants(path?: string): Observable<any[]> {
            return new Observable<any[]>(observer => {
                this.requestResult = this.http.get<any[]>(`${this.apiUrl + 'restaurant'}`, {
                    headers: this.setConfig(),
                    withCredentials: false,
                    responseType: 'json'
                }).subscribe({
                    next: (data: any) => {
                    observer.next(data);
                },
                    error: (err: any) => {
                        observer.error(err);
                        console.log('ERRORE', err)
                    }
                });
            });
        }

    }