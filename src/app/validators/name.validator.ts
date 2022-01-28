import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const name = control.value;
    const pattern = /^[A-Z][a-z\-]*$/;

    if (!pattern.test(name)) {
      return {
        name: true,
        message:
          'Your name must start with an uppercase letter and contain only a-z and dashes.',
      };
    }

    return null;
  };
}
