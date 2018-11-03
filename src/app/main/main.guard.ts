import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { tap } from 'rxjs/operators';

import { CurrentUserService } from '~@core/current-user.service';
import { JWTService } from '~@core/jwt.service';

@Injectable()
export class MainGuard implements CanActivate {
  constructor(
    private userService: CurrentUserService,
    private jwtService: JWTService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.jwtService.valid) {
      this.userService.getUserInfo();
      return true;
    }

    this.userService.redirectToLoginPage();
    return false;
  }
}
