import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const username = control.value;
    const pattern = /^[a-zA-Z0-9\-]{3,}$/;

    if (!pattern.test(username)) {
      return {
        username: true,
        message:
          'Your username must be at least three characters long and contain only letters, numbers and dashes.',
      };
    }

    return null;
  };
}
