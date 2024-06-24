import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/presentation/components/dumm/header/header.component';
import { MenuComponent } from './core/presentation/components/dumm/menu/menu.component';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';

@Component({
  selector: 'cdev-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PageLoginComponent,
    RouterOutlet,
    MenuComponent,
    HeaderComponent,
    MatSidenavModule,
  ],
})
export class AppComponent {
  title = 'appCDev';
}
