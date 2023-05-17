import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  async login(user:User){
    const result = await this.http.post<any>('https://bis365.com.br/bid365/api/v1/auth/users', user).toPromise();
    if (result && result.data.token) {
      localStorage.setItem('token', result.data.token);
      return true;
    }
    else{
      return false;
    }
  }

}
