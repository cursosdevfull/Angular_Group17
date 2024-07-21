import { Component, computed, inject, input } from '@angular/core';

import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  filterFrequency = input.required({
    transform: (value: string) => value.toLowerCase(),
    alias: 'FilterByDay',
  });

  courseService = inject(CourseService);
  coursesInitial = this.courseService.coursesList;
  courses = computed(() =>
    this.coursesInitial().filter((course: Course) =>
      course.dayFrequency.toLowerCase().includes(this.filterFrequency())
    )
  );
  //model.required({ alias: 'FilterByDay' });
}
