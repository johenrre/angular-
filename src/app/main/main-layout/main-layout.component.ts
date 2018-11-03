import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CurrentUserService } from '~@core/current-user.service';
import { checkForm } from '~@helper/check-form';

const { required, minLength } = Validators;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  formEditor!: FormGroup;

  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  isCollapsed = false;
  isvisibleEditor = false;

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.formEditor.controls.checkPassword.updateValueAndValidity());
  }

  checkPasswordValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.formEditor.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
  }

  constructor(
    private readonly fb: FormBuilder,
    public readonly userService: CurrentUserService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit() {
    this.formEditor = this.fb.group({
      newPassword: [null, [required, minLength(8)]],
      oldPassword: [null, [required, minLength(8)]],
      checkPassword: [null, [required, this.checkPasswordValidator]],
    });
  }

  onQueryEditor() {
    checkForm(this.formEditor);
    if (this.formEditor.invalid) return;

    const {newPassword, oldPassword} = this.formEditor.value;

    this.userService.changePassword({original: oldPassword, password: newPassword}).pipe(
      tap(() => {
        this.message.success('修改密码成功');
      }),
      catchError(err => {
        this.message.error('修改密码失败');
        return throwError(err);
      }),
    ).subscribe();
    this.onHideEditor();
  }

  onShowEditor() {
    this.isvisibleEditor = true;
  }

  onHideEditor() {
    this.isvisibleEditor = false;
    this.formEditor.reset();
  }

  logout() {
    this.userService.logout();
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
