import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.authentication.loggedinUser()) {
      return true;
    } else {
      this.router.navigate([`/pages`]);
      return false;
    }
  }

}
