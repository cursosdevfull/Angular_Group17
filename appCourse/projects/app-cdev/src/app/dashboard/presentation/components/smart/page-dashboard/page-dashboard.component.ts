import { Component } from '@angular/core';

import { LayoutService } from '../../../../../config/modules/layout/layout.module';

@Component({
  selector: 'cdev-page-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.css',
})
export class PageDashboardComponent {
  constructor(layoutService: LayoutService) {
    layoutService.configuration = { headerVisible: true, menuVisible: true };
  }
}
