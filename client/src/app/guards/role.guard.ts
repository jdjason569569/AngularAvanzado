import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import decode from 'jwt-decode';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean{
    const expectedRole = route.data.expectedRole;
    const token:any = localStorage.getItem('token');

    const decodeToken:any = decode(token);
    
    if(!this.userService.isAuth() || decodeToken.role !== expectedRole){
      console.log('Usuario no autorizado');
      return false;
    }
    return true;
  }
  
}
