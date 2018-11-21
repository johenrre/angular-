import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { isNil, omitBy } from 'lodash';
import moment from 'moment';
import { Observable, Observer, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { checkForm } from '~@helper/check-form';
import { TableService } from './form.service';

const { required, maxLength, minLength, max, min } = Validators;

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formCrossValidate!: FormGroup;
  formAsyncValidate!: FormGroup;


  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.formCrossValidate.controls.checkPassword.updateValueAndValidity());
  }

  checkPasswordValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.formCrossValidate.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value === 'admin' || control.value === 'test') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  constructor(
    private readonly fb: FormBuilder,
    private dataService: TableService,
  ) {}

  ngOnInit() {
    this.formCrossValidate = this.fb.group({
      password: [null],
      checkPassword: [null, this.checkPasswordValidator],
    });

    this.formAsyncValidate = this.fb.group({
      userName: [null, [required], [this.userNameAsyncValidator]],
    });
  }

}
