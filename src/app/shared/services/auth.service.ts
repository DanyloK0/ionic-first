import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/features/profile/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'https://apposto.nextre.it/dev/api/';
  // private apiUrl: string = 'https://apposto.nextre.it/sbb/api/';
  private requestResult: Subscription = new Subscription();

  public isUserLogged: boolean = false
  public user: string = ''

  constructor(
    private http: HttpClient
  ) {
    this.getUserLogged();
  }

  login(form: any){
    const body = {
      email: form.value.username,
      password: form.value.password
    }
    return this.http.post<any>(`${this.apiUrl}authentication/login`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    })
  }

  resetPassword(form: any){
    const body = {
      email: form.value.email,
    }
    return this.http.post<any>(`${this.apiUrl}authentication/reset-password`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    })
  }

  logOut(){
    return this.http.post<any>(`${this.apiUrl}authentication/logout`, {})
  }

  getUserLogged(){
    const token = localStorage.getItem('token')
    if(token){
      this.isUserLogged = true
      var split = token.substring(token.indexOf(' ') + 1)
      var tokenInfo: any = jwt_decode(split)
      return tokenInfo.user
    }else{
      return null
    }
  }

  getUserById(id: any){
    return new Observable<User>(observer => {
      this.requestResult = this.http.get<any>(`${this.apiUrl + 'admin/' + id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
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

  getToken(){
    const token = localStorage.getItem('token')
    if(token){
      return token.substring(token.indexOf(' ') + 1)
    }else{
      return null
    }
  }

  refreshToken(){
    return this.http.post<any>(`${this.apiUrl}authentication/refresh-token`, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    })
  }

}
