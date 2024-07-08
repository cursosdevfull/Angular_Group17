import { Component } from '@angular/core';

import { LayoutService } from '../../../../../config/modules/layout/layout.module';
import { LoginAnimationComponent } from '../../dumm/login-animation/login-animation.component';
import { LoginFormComponent } from '../../dumm/login-form/login-form.component';

@Component({
  selector: 'cdev-page-login',
  standalone: true,
  imports: [LoginAnimationComponent, LoginFormComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})
export class PageLoginComponent {
  constructor(layoutService: LayoutService) {
    layoutService.configuration = { headerVisible: false, menuVisible: false };
  }
}
