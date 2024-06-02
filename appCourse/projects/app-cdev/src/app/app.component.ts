import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';

@Component({
  selector: 'cdev-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PageLoginComponent, RouterOutlet],
})
export class AppComponent {
  title = 'appCDev';
}
