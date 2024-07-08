import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CapsLockDirective } from '../../../../../shared/directives/caps-lock/caps-lock.directive';
import { CustomValidators } from '../../../services/custom-validators';

@Component({
  selector: 'cdev-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, CapsLockDirective],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  @ViewChild('token') inputToken: ElementRef | undefined;
  @ViewChild('email') inputEmail: ElementRef | undefined;

  formGroup!: FormGroup;
  formGroupToken!: FormGroup;
  domains = ['company.com', 'company.com.br'];
  formBuilder!: FormBuilder;
  formBuilderToken!: FormBuilder;

  moveFormToLeft = false;

  stateCapsLock = false;

  constructor(private readonly router: Router) {
    this.createForm();
  }

  createForm() {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          ),
          CustomValidators.filterEmailByDomain(...this.domains),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ],
      ],
    });

    this.formBuilderToken = new FormBuilder();
    this.formGroupToken = this.formBuilderToken.group({
      token: [null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

  login() {
    if (this.formGroup.valid) {
      this.moveFormToLeft = true;
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
    }
  }

  setFocusOnInputToken() {
    this.inputToken?.nativeElement.focus();
  }

  sentToken() {
    if (this.formGroupToken.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.formGroupToken.markAllAsTouched();
      this.formGroupToken.updateValueAndValidity();
    }
  }

  ngAfterViewInit() {
    this.inputEmail?.nativeElement.focus();
  }

  capsLock(event: boolean) {
    this.stateCapsLock = event;
  }
}
