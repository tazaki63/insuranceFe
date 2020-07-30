import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router, public loginService:TokenStorageService) { }


canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
  if(this.loginService.isUserLoggedIn())
  return true;
  this.router.navigate(['login']);
  return false;
}
}
