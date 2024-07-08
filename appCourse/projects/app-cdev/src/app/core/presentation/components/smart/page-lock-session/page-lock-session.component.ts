import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InactivityService } from '../../../../../config/modules/inactivity/inactivity.module';

@Component({
  selector: 'cdev-page-lock-session',
  standalone: true,
  imports: [MatCardModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './page-lock-session.component.html',
  styleUrl: './page-lock-session.component.css',
})
export class PageLockSessionComponent {
  constructor(private readonly inactivityService: InactivityService) {}

  unlockSession() {
    this.inactivityService.startWatching();
  }
}
