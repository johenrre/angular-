import { Component, OnInit, OnChanges } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueAlterEgoValidator } from './alter-ego.directive';

const { required, maxLength, minLength, max, min } = Validators;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  heroForm: FormGroup;
  get status() {
    return this.alterEgo.pending ? 'validating' : null;
  }

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      'alterEgo': new FormControl(null, {
        validators: [required, maxLength(20)],
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur',
      }),
    });

  }

  get alterEgo() { return this.heroForm.get('alterEgo'); }

  constructor(
    private readonly fb: FormBuilder,
    private alterEgoValidator: UniqueAlterEgoValidator) { }
}
