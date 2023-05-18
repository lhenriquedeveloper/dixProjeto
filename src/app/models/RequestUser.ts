import { IRequestUser } from "../interfaces/IResquestUser";

export class RequestUser implements IRequestUser{
  username:string
  password: string;

  constructor(){
    this.username = ''
    this.password = ''
  }
}
