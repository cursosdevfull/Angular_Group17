import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { UsernameComponent } from './app/username.component';

bootstrapApplication(UsernameComponent, appConfig).catch((err) =>
  console.error(err)
);
