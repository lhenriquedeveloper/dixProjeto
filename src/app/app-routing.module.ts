import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  //Login
  {
      path: '',
      component: LoginComponent
  },
  //Home
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [authGuard]
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
