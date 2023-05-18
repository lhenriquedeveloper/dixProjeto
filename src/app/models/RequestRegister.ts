import { IRequestRegister } from "../interfaces/IRequestRegister";

export class RequestRegister implements IRequestRegister{
  email: string;
  name: string;
  phone: string;
  password: string;

  constructor(){
    this.email = '';
    this.name = '';
    this.phone = '';
    this.password = '';
  }
}
