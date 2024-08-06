import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  CONSTANT_INACTIVITY_CONFIG,
  InactivityModule,
} from './config/modules/inactivity/inactivity.module';
import {
  CONSTANT_LAYOUT_CONFIG,
  LayoutModule,
} from './config/modules/layout/layout.module';
import { CourseApplication } from './course/application/course.application';
import { CourseInfrastructure } from './course/infrastructure/course.infrastructure';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(InactivityModule.forRoot(CONSTANT_INACTIVITY_CONFIG)),
    importProvidersFrom(LayoutModule.forRoot(CONSTANT_LAYOUT_CONFIG)),
    CourseApplication,
    CourseInfrastructure,
  ],
};
