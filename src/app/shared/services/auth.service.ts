import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'https://apposto.nextre.it/dev/api/';
  public isUserLogged: boolean = false
  public user: string = ''

  constructor(
    private http: HttpClient
  ) { 
    this.getUserLogged()
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
  
  logOut(){
    return this.http.post<any>(`${this.apiUrl}authentication/logout`, {})
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
  
}
