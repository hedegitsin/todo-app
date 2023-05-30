import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      setHeaders: {
        "Authorization": this.authenticationService.getAccessToken()
      }
    })
    return next.handle(authReq).pipe(
      catchError((err) => this.handleAuthError(err))
    );
  }


  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    console.log(`err`, err)
    // If the user is not authorized
    if (err.status === 401 || err.status === 403) {
      this.authenticationService.logout();
      return EMPTY// or EMPTY may be appropriate here
    }

    // Pass through all other errors
    return throwError(() => err);
  }
}
