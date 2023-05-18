import { CanActivate } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private authService:AuthServiceService) {}
  canActivate(): boolean {
    return this.authService.isAutenticated();
}
}
