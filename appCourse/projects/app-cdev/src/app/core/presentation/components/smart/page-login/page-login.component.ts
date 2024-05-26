import { Component } from '@angular/core';

import { LoginAnimationComponent } from '../../dumm/login-animation/login-animation.component';
import { LoginFormComponent } from '../../dumm/login-form/login-form.component';

@Component({
  selector: 'cdev-page-login',
  standalone: true,
  imports: [LoginAnimationComponent, LoginFormComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})
export class PageLoginComponent {}
