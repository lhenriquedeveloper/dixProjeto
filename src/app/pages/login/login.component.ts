import { Component} from '@angular/core';
import { RequestUser } from 'src/app/models/RequestUser';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user:RequestUser;

  constructor(
    private authService: AuthServiceService
  ) {
    this.user = new RequestUser();
    this.user.username = '';
    this.user.password = '';
  }

async doLogin(){
  try {
    await this.authService.login(this.user);
  } catch (error) {
    console.log(error);
  }
}
}
