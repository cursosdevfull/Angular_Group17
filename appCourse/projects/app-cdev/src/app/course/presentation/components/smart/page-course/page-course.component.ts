import { Component } from '@angular/core';

import { ContainerComponent } from '../../../../../shared/components/container/container.component';
import { TitleComponent } from '../../../../../shared/components/title/title.component';

@Component({
  selector: 'cdev-page-course',
  standalone: true,
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.css',
})
export class PageCourseComponent {}
