import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { InactivityService } from './config/modules/inactivity/inactivity.module';
import { LayoutConfig, LayoutService } from './config/modules/layout/layout.module';
import { HeaderComponent } from './core/presentation/components/dumm/header/header.component';
import { MenuComponent } from './core/presentation/components/dumm/menu/menu.component';
import {
  PageLockSessionComponent,
} from './core/presentation/components/smart/page-lock-session/page-lock-session.component';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';
import { ProgressService } from './core/presentation/services/progress.service';

@Component({
  selector: 'cdev-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PageLoginComponent,
    PageLockSessionComponent,
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
  inactivityDetected = false;
  layoutConfig: LayoutConfig | undefined;

  //subscription: Subscription;

  constructor(
    progressService: ProgressService,
    private readonly inactivityService: InactivityService,
    private readonly layoutService: LayoutService
  ) {
    /*this.subscription =*/
    progressService.getStatusProgressBar().subscribe({
      next: (status) => {
        this.showProgressBar = status;
      },
    });

    layoutService.configuration.subscribe((config: LayoutConfig) => {
      this.layoutConfig = config;
    });

    this.inactivityService.startWatching();
    this.inactivityService
      .getInactivityEvent()
      .subscribe((inactivity: boolean) => {
        this.inactivityDetected = inactivity;
      });
  }

  @HostListener('window:keydown.control.p', ['$event'])
  lockSession(event: Event) {
    event.preventDefault();
    this.inactivityService.lockedSession();
  }

  @HostListener('window:keydown.control.z', ['$event'])
  modeZen(event: Event) {
    event.preventDefault();
    if (this.layoutConfig) {
      this.layoutService.configuration = {
        menuVisible: !this.layoutConfig.menuVisible,
        headerVisible: !this.layoutConfig.headerVisible,
      };

      this.layoutService.configuration = this.layoutConfig;
    }
  }

  /* ngOnDestroy() {
    this.subscription.unsubscribe();
  } */
}
