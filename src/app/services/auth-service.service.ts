import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUser } from '../models/RequestUser';
import { ResponseUser } from '../models/ResponseUser';
import { RequestRegister } from '../models/RequestRegister';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(
    private http: HttpClient,
    public router: Router
    ) {}

  //Login Function
  async login(user:RequestUser){
    const result = await this.http.post<ResponseUser>('https://bis365.com.br/bid365/api/v1/auth/login',user,{
    headers:{
      app: "23a20977-9368-4f13-a008-d556163fa8df",
    },
    }).toPromise();
    if (result && result.data.token) {
      console.log(result);
      localStorage.setItem('token', result.data.token);
      this.router.navigate(['/home']);
      return true;
    }
    else{
      return false;
    }
  }

  //IsAutenticated Function
  isAutenticated(): boolean{
    return Boolean(localStorage.getItem('token'));
  }

  //Register Function
  async register(register:RequestRegister){
    const result = await this.http.post<any>('https://bis365.com.br/bid365/api/v1/auth/users',register,{
    headers:{
      app: "23a20977-9368-4f13-a008-d556163fa8df",
    },
    }).toPromise();
    if (result) {
      console.log(result);
    }
    else{
      console.log("Deu ruim");
    }
  }



}
