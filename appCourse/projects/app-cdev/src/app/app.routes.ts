import { Routes } from '@angular/router';

import { LoginFormComponent } from './core/presentation/components/dumm/login-form/login-form.component';
import { RegisterComponent } from './core/presentation/components/dumm/register/register.component';
import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';
import { PageCourseComponent } from './course/presentation/components/smart/page-course/page-course.component';
import { PageDashboardComponent } from './dashboard/presentation/components/smart/page-dashboard/page-dashboard.component';
import { PageScheduleComponent } from './schedule/presentation/components/smart/page-schedule/page-schedule.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: PageLoginComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'dashboard', component: PageDashboardComponent },
  {
    path: 'user',
    loadComponent: () =>
      import(
        './user/presentation/components/smart/page-user/page-user.component'
      ).then((component) => component.PageUserComponent),
  },
  { path: 'course', component: PageCourseComponent },
  { path: 'schedule', component: PageScheduleComponent },
  {
    path: 'video',
    loadChildren: () =>
      import('./video/video.module').then((m) => m.VideoModule),
  },
  { path: '**', redirectTo: 'auth/login' },
];
