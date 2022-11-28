import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilityService } from './utility.service';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl: string = 'https://apposto.nextre.it/dev/api/';
  // private apiUrl: string = 'https://apposto.nextre.it/sbb/api/';
  private requestResult: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  setConfig() {
    return new HttpHeaders({});
  }

  getAll(path?: string): Observable<any[]> {
    return new Observable<any[]>(observer => {
      debugger
      this.requestResult = this.http.get<any[]>(`${!path ? this.apiUrl + this.utilityService.getApi() : this.apiUrl + path}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json'
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
          console.log(data, 'INGETALL');
        },
        error: (err: any) => {
          observer.error(err);
        }
      }
      );
    });
  }

  getRestaurants(path?: string): Observable<any[]> {
    return new Observable<any[]>(observer => {
      this.requestResult = this.http.get<any[]>(`${this.apiUrl + 'restaurant'}`, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json'
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
          console.log(data, 'INGETALL');
        },
        error: (err: any) => {
          observer.error(err);
          console.log('ERRORE', err)
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
          },
          error: (err: any) => {
            observer.error(err);
          }
        }
      );
    });
  }

  create(element: any, path?: string): Observable<any> {
    return new Observable<any>(observer => {
      const body = element;

      this.http.post<any>(`${!path ? this.apiUrl + this.utilityService.getApi() : this.apiUrl + path}`, body, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json',
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
        },
        error: (err: any) => {
          observer.error(err);
        }
      });
    });
  }

  update(element: any, path?: string): Observable<any> {
    return new Observable<any>(observer => {
      const body = element;

      this.http.put<any>(`${!path ? this.apiUrl + this.utilityService.getApi() : this.apiUrl + path}`, body, {
        headers: this.setConfig(),
        withCredentials: false,
        responseType: 'json',
      }).subscribe({
        next: (data: any) => {
          observer.next(data);
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
