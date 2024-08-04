import { BaseRepository } from '../../../core/domain/repositories/base';
import { ScheduleResult } from '../../infrastructure/schedule.infrastructure';
import { Schedule } from '../roots/schedule';

export type TSchedule = {
  report(courseId: string): ScheduleResult[];
};

export type ScheduleRepository = TSchedule &
  BaseRepository<Schedule, ScheduleResult>;
