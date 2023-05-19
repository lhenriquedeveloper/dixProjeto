import { Component } from '@angular/core';
import { RequestRegister } from 'src/app/models/RequestRegister';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public register:RequestRegister;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.register = new RequestRegister();
    this.register.email = '';
    this.register.name = '';
    this.register.phone = '';
    this.register.password = '';
  }

async doRegister(){
  try {
    await this.authService.register(this.register);
    this.router.navigate(['']);
  } catch (error) {
    console.log(error);
  }
}
}
