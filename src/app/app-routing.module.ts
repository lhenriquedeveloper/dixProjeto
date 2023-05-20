import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  //Login Route
  {
      path: '',
      component: LoginComponent
  },
  //Home Route
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [authGuard]
  },
  //Register Route
  {
    path: 'register',
    component: RegisterComponent,
  },
  // Details Route
  {
    path: 'details/:id',
    component: DetailComponent,
    canActivate: [authGuard],
  },
  //Any Route
  {
    path: '**',
    redirectTo: '',
  }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
