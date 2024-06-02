import { Routes } from '@angular/router';

import { PageLoginComponent } from './core/presentation/components/smart/page-login/page-login.component';

export const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '**', redirectTo: 'login' },
];
