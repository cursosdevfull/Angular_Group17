import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { HeaderComponent } from './core/presentation/components/dumm/header/header.component';
import { MenuComponent } from './core/presentation/components/dumm/menu/menu.component';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';
import { ProgressService } from './core/presentation/services/progress.service';

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
    MatProgressBarModule,
    NgIf,
  ],
})
export class AppComponent {
  title = 'appCDev';
  showProgressBar = false;

  subscription: Subscription;

  constructor(private readonly progressService: ProgressService) {
    this.subscription = progressService.getStatusProgressBar().subscribe({
      next: (status) => {
        this.showProgressBar = status;
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
