import { BaseRepository } from '../../../core/domain/repositories/base';
import { CourseResult } from '../../infrastructure/course.infrastructure';
import { Course } from '../roots/course';

export type TCourse = {
  report(): CourseResult[];
};

export type CourseRepository = TCourse & BaseRepository<Course, CourseResult>;
