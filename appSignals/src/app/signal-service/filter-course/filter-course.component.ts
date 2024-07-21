import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-course.component.html',
  styleUrl: './filter-course.component.css',
})
export class FilterCourseComponent {
  filterFrequency = model.required({ alias: 'FilterByDay' });
}
