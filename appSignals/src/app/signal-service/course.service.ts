import { Injectable, signal } from '@angular/core';

import { COURSES, Courses } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  coursesList = signal<Courses>(COURSES);
}
