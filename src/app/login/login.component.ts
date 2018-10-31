import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { checkForm } from '~@helper/check-form';

import { CurrentUserService } from '~@core/current-user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: CurrentUserService,
    private readonly message: NzMessageService,
  ) {}

  login() {
    checkForm(this.loginForm);

    if (this.loginForm.invalid) return;
    this.userService
      .login(this.loginForm.value)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err instanceof ErrorEvent) {
            this.message.error('网络错误，请检查网络是否正常');
          } else if (err.status < 500) {
            this.message.error('用户名或密码错误');
          } else {
            this.message.error('登录异常，请稍后再试');
          }

          return throwError(err);
        }),
      )
      .subscribe(() => {
        this.userService.redirect();
      });
  }
}
