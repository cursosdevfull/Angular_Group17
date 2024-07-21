import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-signal-input-service',
  standalone: true,
  imports: [FormsModule, CourseListComponent],
  templateUrl: './signal-input-service.component.html',
  styleUrl: './signal-input-service.component.css',
})
export class SignalInputServiceComponent {
  customFilter = '';
}
