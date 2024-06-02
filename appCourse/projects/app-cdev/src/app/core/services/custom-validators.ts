import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static filterEmailByDomain(...domains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const domain = value.split('@')[1];

      if (domains.includes(domain)) {
        return null;
      }

      return { filterEmailByDomain: true };
    };
  }
}
