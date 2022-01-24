import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const pattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w\s]).*$/;

    if (!pattern.test(value)) {
      return {
        weakPassword: true,
      };
    }

    return null;
  };
}
