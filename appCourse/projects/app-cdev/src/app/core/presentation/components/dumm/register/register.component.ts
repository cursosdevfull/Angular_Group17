import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

import { AuthApplication } from '../../../../../auth/application/auth.application';
import { Role } from '../../../../../auth/domain/entities/role';
import { AuthRegister } from '../../../../../auth/domain/roots/auth-register';
import { RegisterInfo } from '../../../../../auth/infrastructure/dtos/register.dto';

@Component({
  selector: 'cdev-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public fgRegister!: FormGroup;
  public fgToken!: FormGroup;
  public next = false;
  public qrCode!: string;
  private accessToken!: string;
  private secret!: string;

  private readonly authApplication = inject(AuthApplication);

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    this.fgRegister = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ]),
    });

    this.fgToken = new FormGroup({
      token: new FormControl(null, Validators.required),
    });
  }

  register() {
    const { name, lastname, email, password } = this.fgRegister.value;
    const role = new Role('d18d0d20-d686-4520-a33c-e5e7653382bc');

    const authRegister = new AuthRegister(name, lastname, email, password, [
      role,
    ]);

    /*this.authApplication.credentials.set(authRegister);

    effect(() => {
      const registerInfo: RegisterInfo = this.authApplication.registerSignal();
      this.nextRegister(registerInfo);
    });*/

    /* this.authApplication.register(authRegister).subscribe({
      next: this.nextRegister.bind(this),
      error: console.log,
    }); */
  }

  nextRegister(data: RegisterInfo) {
    this.qrCode = data.qrCode;
    this.secret = data.secret;
    this.accessToken = data.accessToken;
    this.next = true;
  }

  enable2fa() {
    const { token } = this.fgToken.value;

    /*this.authApplication
      .enable2fa(token, this.secret, this.accessToken)
      .subscribe({
        next: this.nextLogin.bind(this),
        error: console.log,
      });*/
  }

  nextLogin(data: RegisterInfo) {
    this.router.navigate(['/auth/login']);
  }
}
