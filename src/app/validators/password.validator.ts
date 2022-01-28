import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!password) {
      return null;
    }

    const pattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w\s]).{6,}$/;

    if (!pattern.test(password)) {
      return {
        password: true,
        message:
          'Your password must be at least 6 characters long contain at least one of the following: a-z, A-Z, 0-9 and a symbol.',
      };
    }

    return null;
  };
}
