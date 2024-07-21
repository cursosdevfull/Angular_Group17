import { NgForOf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';
import { FilterCourseComponent } from './filter-course/filter-course.component';

@Component({
  selector: 'app-signal-service',
  standalone: true,
  imports: [NgForOf, FilterCourseComponent],
  templateUrl: './signal-service.component.html',
  styleUrl: './signal-service.component.css',
})
export class SignalServiceComponent {
  //courses = signal<Courses>([]);
  courseService = inject(CourseService);
  customFilter = signal<string>('');

  coursesInitial = this.courseService.coursesList;
  courses = computed(() =>
    this.coursesInitial().filter((course: Course) =>
      course.dayFrequency
        .toLowerCase()
        .includes(this.customFilter().toLowerCase())
    )
  );
  constructor() {
    //this.courses = this.courseService.coursesList;
  }
}
