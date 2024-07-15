import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
} from 'ng-recaptcha';

import { AuthTokens } from '../../../../../auth/services/auth-tokens';
import { AuthService } from '../../../../../auth/services/auth.service';
import { CapsLockDirective } from '../../../../../shared/directives/caps-lock/caps-lock.directive';

@Component({
  selector: 'cdev-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    CapsLockDirective,
    RouterLink,
    MatButtonModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Len6pMpAAAAAHGxLZDXxvPwRLu4W8DjOpdIs13r',
      },
    },
  ],
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

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
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
          //CustomValidators.filterEmailByDomain(...this.domains),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          /*Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),*/
        ],
      ],
      recaptchaCode: [null, Validators.required],
    });

    this.formBuilderToken = new FormBuilder();
    this.formGroupToken = this.formBuilderToken.group({
      token: [null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
    });
  }

  login() {
    if (this.formGroup.valid) {
      const { email, password, recaptchaCode } = this.formGroup.value;
      this.authService.login(email, password, recaptchaCode).subscribe({
        next: (data: AuthTokens) => {
          const { accessToken, refreshToken } = data;
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
          this.moveFormToLeft = true;
        },
        error: () => {
          console.log('Error');
        },
      });
      //this.moveFormToLeft = true;
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
    }
  }

  goToRegister() {
    console.log('goToRegister');
    this.router.navigate(['/auth/register']);
  }

  setFocusOnInputToken() {
    this.inputToken?.nativeElement.focus();
  }

  sentToken() {
    const { token } = this.formGroupToken.value;
    if (this.formGroupToken.valid) {
      this.authService.verifyToken(token).subscribe({
        next: (data: AuthTokens) => {
          const { accessToken, refreshToken } = data;
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
        },
        error: () => {
          console.log('Error');
        },
      });
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
