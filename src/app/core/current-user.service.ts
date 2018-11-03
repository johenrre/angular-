import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { JWTService } from '~@core/jwt.service';
import { AuthInfo } from '~@interface/auth-info.interface';
import { User } from '~@interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  info?: User;

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JWTService,
    private readonly router: Router,
  ) {}

  getUserInfo() {
    this.http.get<User>(`api/users/${this.jwtService.id}`).pipe(
      tap(res => {
        this.info = res;
      }),
      catchError(res => of(false)),
    ).subscribe();
  }

  login(info: AuthInfo) {
    return this.jwtService.fetch(info).pipe(
      tap(data => {
        this.jwtService.create(data.token);
      }),
    );
  }

  changePassword(params: any) {
    return this.http.patch(`api/users/self/password`, params);
  }

  logout() {
    this.jwtService.clear();
    this.redirectToLoginPage();
  }

  redirect() {
    this.redirectToHomePage();
  }

  redirectToHomePage() {
    this.router.navigateByUrl('/');
  }

  redirectToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
