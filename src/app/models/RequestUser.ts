import { IRequestUser } from "../interfaces/IResquestUser";

export class RequestUser implements IRequestUser{
  email:string
  password: string;

  constructor(){
    this.email = ''
    this.password = ''
  }
}
