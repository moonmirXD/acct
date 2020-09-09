import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private authentication: AuthenticationService
  ) { }

  intercept(req, next) {
    const authenticationService = this.injector.get(AuthenticationService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authenticationService.getToken()}`
      }
    });
    return next.handle(tokenizedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          this.authentication.logoutUser();
        }

        return throwError(error);
      })
    );
  }
}
