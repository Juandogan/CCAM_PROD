import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService : AuthService, private router:Router){}

  canActivate():any {
    if(this.authService.loggedIn()){
      return true
    }
    this.router.navigate(['/login']);
    return false
        
  }
  
}
