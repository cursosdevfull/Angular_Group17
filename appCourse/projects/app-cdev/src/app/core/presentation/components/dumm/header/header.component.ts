import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { InactivityService } from '../../../../../config/modules/inactivity/inactivity.module';

@Component({
  selector: 'cdev-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private readonly inactivityService: InactivityService,
    private readonly router: Router
  ) {}

  lockSession() {
    this.inactivityService.lockedSession();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
