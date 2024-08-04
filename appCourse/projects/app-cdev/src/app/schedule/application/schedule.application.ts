import { inject } from '@angular/core';

import { BaseApplication } from '../../core/application/base';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/roots/schedule';
import {
  ScheduleInfrastructure,
  ScheduleResult,
} from '../infrastructure/schedule.infrastructure';

export class ScheduleApplication extends BaseApplication<
  Schedule,
  ScheduleResult,
  ScheduleRepository
> {
  repository = inject(ScheduleInfrastructure);
}
