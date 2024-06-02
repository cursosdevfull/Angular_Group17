import { Component } from '@angular/core';

import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';

@Component({
  selector: 'cdev-page-user',
  standalone: true,
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css',
})
export class PageUserComponent {}