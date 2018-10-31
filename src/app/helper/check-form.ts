import { FormGroup } from '@angular/forms';

export function checkForm(form: FormGroup) {
  Object.values(form.controls).forEach(ctrl => {
    ctrl.markAsDirty();
    ctrl.updateValueAndValidity();
  });
}
