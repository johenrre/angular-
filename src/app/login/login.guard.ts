import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

// import { CurrentUserService } from '~@core/current-user.service';
// import { JWTService } from '~@core/jwt.service';

@Injectable()
export class LoginGuard {
// export class LoginGuard implements CanActivate {
  constructor(
    // private readonly jwtService: JWTService,
    // private readonly userService: CurrentUserService,
  ) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (!this.jwtService.valid) return true;

    // this.userService.redirectToHomePage();
    // return false;
  // }
}
