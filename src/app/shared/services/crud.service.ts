import { Injectable } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {UtilityService} from "./utility.service";


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl: string = 'https://apposto.nextre.it/dev/api/';
  private requestResult: Subscription = new Subscription();

  constructor(
    private utilityService: UtilityService,
    private http: HttpClient
  ) { }

  setConfig() {
    return new HttpHeaders({
      //'Authorization': 'Bearer ' + [].join(''),
      'Content-Type': 'application/json'
    });
  }

  getAll(): Observable<any[]> {
    return new Observable<any[]>(observer => {
      this.requestResult = this.http.get<any[]>(`${this.apiUrl + this.utilityService.getApi()}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json'
      }).subscribe({
          next: (data: any) => {
            observer.next(data);
            console.log(observer, 'observer: crud.service');
          },
          error: (err: any) => {
            observer.error(err);
          }
        }
      );
    });
  }

  getById(id: any): Observable<any> {
    return new Observable<any>(observer => {
      this.requestResult = this.http.get<any>(`${this.apiUrl + this.utilityService.getApi() + '/' + id}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json'
      }).subscribe({
          next: (data: any) => {
            observer.next(data);
            console.log(observer, 'observer: crud.service');
          },
          error: (err: any) => {
            observer.error(err);
          }
        }
      );
    });
  }

  getByFilter(filter: string): Observable<any> {
    return new Observable<any>(observer => {
      this.requestResult = this.http.get<any>(`${this.apiUrl + this.utilityService.getApi() + '?search=' + filter}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json'
      }).subscribe({
          next: (data: any) => {
            observer.next(data);
            console.log(observer, 'observer: crud.service');
          },
          error: (err: any) => {
            observer.error(err);
          }
        }
      );
    });
  }

  create(element: any): Observable<any> {
    return new Observable<any>(observer => {
      const body = JSON.stringify(element);

      this.http.post<any>(`${this.apiUrl + this.utilityService.getApi()}`, body, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json',
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
          console.log(observer, 'observer: crud.service');
        },
        error: (err: any) => {
          observer.error(err);
        }
      });
    });
  }

  update(element: any): Observable<any> {
    return new Observable<any>(observer => {
      const body = JSON.stringify(element);

      this.http.put<any>(`${this.apiUrl + this.utilityService.getApi()}`, body, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json',
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
          console.log(observer, 'observer: crud.service');
        },
        error: (err: any) => {
          observer.error(err);
        }
      });
    });
  }

  delete(id: any) {
    return new Observable<any>(observer => {
      this.requestResult = this.http.delete<any>(`${this.apiUrl + this.utilityService.getApi() + '/' + id}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json',
      }).subscribe({
        next: data => {
          observer.next(data);
        },
        error: err => {
          observer.error(err);
        }
      });
    });
  }

  cancelSubscribe() {
    this.requestResult?.unsubscribe();
  }
}
