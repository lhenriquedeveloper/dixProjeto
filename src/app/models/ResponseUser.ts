import { IResponseUser } from "../interfaces/IResponseUser";

export class ResponseUser implements IResponseUser{
  message: string;
  data:{
    user:{}
    tenants:[]
    token: string;
    }


  constructor(){
    this.message = ''
    this.data = {
      user:{},
      tenants:[],
      token: ''
    }
  }

}
