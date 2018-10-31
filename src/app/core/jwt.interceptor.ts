import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CurrentUserService } from '~@core/current-user.service';
import { JWTService } from '~@core/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private jwtService!: JWTService;

  constructor(
    private readonly userService: CurrentUserService,
    private readonly injector: Injector,
    private readonly router: Router,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (
      req.url.toLowerCase().includes('token') &&
      req.method.toLowerCase() === 'post'
    )
      return next.handle(req);

    this.jwtService = this.injector.get(JWTService);

    if (this.jwtService.valid)
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${this.jwtService.jwt}` },
      });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.jwtService.clear();
          this.userService.redirectToLoginPage();
        }
        return throwError(error);
      }),
    );
  }
}

export const jwtInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
