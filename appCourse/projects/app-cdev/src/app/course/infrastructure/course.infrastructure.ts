import { BaseInfrastructure } from '../../core/infrastructure/base';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/roots/course';

export type CourseResult = {
  courseId: string;
  title: string;
  slug: string;
  status: string;
};

export class CourseInfrastructure
  extends BaseInfrastructure<Course, CourseResult>
  implements CourseRepository
{
  constructor() {
    super('course');
  }

  report(): CourseResult[] {
    throw new Error('Method not implemented.');
  }
}
