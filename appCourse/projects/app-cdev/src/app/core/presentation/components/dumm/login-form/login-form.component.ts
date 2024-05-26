import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'cdev-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  formGroup!: FormGroup;
  domains = ['company.com', 'company.com.br'];

  constructor() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup(
      {
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          ),
          //this.onlyEmailCompany,
          //this.filterEmailByDomain('company.com', 'company.com.br'),
          this.onlyEmailCorporate.bind(this),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
        confirm: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
      },
      this.validatePasswordAndConfirm
    );
  }

  validatePasswordAndConfirm(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirm')?.value;

    if (!password || !confirm) {
      return null;
    }

    if (password === confirm) {
      return null;
    }

    return { validatePasswordAndConfirm: true };
  }

  onlyEmailCompany(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (
      value.match(/^[a-zA-Z0-9]*@company\.com$/) ||
      value.match(/^[a-zA-Z0-9]*@company\.com\.br$/)
    ) {
      return null;
    }

    return { onlyEmailCompany: true };
  }

  onlyEmailCorporate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const domain = value.split('@')[1];
    console.log('domains', this.domains);

    if (this.domains.includes(domain)) {
      return null;
    }

    return { onlyEmailCorporate: true };
  }

  filterEmailByDomain(...domains: string[]): ValidatorFn {
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

  login() {
    console.log(this.formGroup);

    if (this.formGroup.valid) {
      alert('Form valid');
    }
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();
  }
}
