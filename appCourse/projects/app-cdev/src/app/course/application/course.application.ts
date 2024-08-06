import { inject } from '@angular/core';

import { BaseApplication } from '../../core/application/base';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';
import {
  CourseInfrastructure,
  CourseResult,
} from '../infrastructure/course.infrastructure';

export class CourseApplication extends BaseApplication<
  Course,
  CourseResult,
  CourseRepository
> {
  protected repository = inject(CourseInfrastructure);
}
