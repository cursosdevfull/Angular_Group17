import { Routes } from '@angular/router';

import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';
import { PageCourseComponent } from './course/presentation/components/smart/page-course/page-course.component';
import { PageDashboardComponent } from './dashboard/presentation/components/smart/page-dashboard/page-dashboard.component';
import { PageUserComponent } from './user/presentation/components/smart/page-user/page-user.component';

export const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'user', component: PageUserComponent },
  { path: 'course', component: PageCourseComponent },
  { path: '**', redirectTo: 'dashboard' },
];
