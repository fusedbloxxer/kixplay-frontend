import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dobValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const dob = new Date(control.value);
    const diffTime = Math.abs(new Date().getTime() - dob.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = diffDays / 365;

    if (diffYears < 18) {
      return {
        dob: true,
        message: 'You have to be at least 18 years old',
      };
    }

    return null;
  };
}
