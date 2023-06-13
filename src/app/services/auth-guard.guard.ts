import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authService:AuthService){}
  
canActivate() {
  if(this.authService.isLoggedIn()) {
    return true;
  }else{
    this.router.navigate(['/login'])
    return false;
  }
}

}
