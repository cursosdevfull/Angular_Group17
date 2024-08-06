import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../core/infrastructure/base';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';

export type ScheduleResult = {
  scheduleId: string;
  courseId: string;
  title: string;
  image: string;
  summary: string;
  slogan: string;
  dateStart: string;
  hours: number;
  duration: number;
  frequency: string[];
  type: string;
  status: string;
  whatLearn: string[];
  requirements: string[];
  content: string[];
};

@Injectable({
  providedIn: 'root',
})
export class ScheduleInfrastructure
  extends BaseInfrastructure<Schedule, ScheduleResult>
  implements ScheduleRepository
{
  constructor() {
    super('schedule');
  }
  report(courseId: string): ScheduleResult[] {
    throw new Error('Method not implemented.');
  }
}
