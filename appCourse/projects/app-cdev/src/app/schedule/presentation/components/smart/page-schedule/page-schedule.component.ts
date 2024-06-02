import { Component } from '@angular/core';

import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';

@Component({
  selector: 'cdev-page-schedule',
  standalone: true,
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.css',
})
export class PageScheduleComponent {}
