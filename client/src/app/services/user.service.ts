import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {GLOBAL} from './global';
import { User } from '../../models/user';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url!: string;

  constructor(private http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  prueba(){
    const userSend = {
      name: 'prueba',
      surName: 'prueba',
      email : 'prueba',
      password: 'prueba',
      role: 'role_user'
   } 
    const token: any = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : token
    })
    //return this.http.get(`${this.url}/user`, {headers : headers});
    return this.http.post(`${this.url}/user`, userSend ,{headers : headers});
  }

  register(user: User){
  const userSend = {
     name: user.name,
     surName: user.surname,
     email : user.email,
     password: user.password,
     role: 'role_user'
  } 
     return this.http.post<User>(`${this.url}/user`, userSend);
  }


  signUp(user: User, getToken = null){
    // if(getToken != null){
    //   user.getToken = getToken;
    // }
    return this.http.post(this.url+'/login',user);

  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUser() {
    return  localStorage.getItem('user');
  }
}
