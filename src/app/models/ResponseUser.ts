import { IResponseUser } from "../interfaces/IResponseUser";

export class ResponseUser implements IResponseUser{
  data:{
    name:string;
    token:string;
    token_type:string;
    expires_at:string;
  };
  message:string;

  constructor(){
    this.data = {
      name:'',
      token:'',
      token_type:'',
      expires_at:''
    };
    this.message = '';
  }
}
