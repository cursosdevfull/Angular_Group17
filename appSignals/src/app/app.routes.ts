import { Routes } from '@angular/router';

import { SignalInputServiceComponent } from './signal-input-service/signal-input-service.component';
import { SignalObservablesComponent } from './signal-observables/signal-observables.component';
import { SignalServiceComponent } from './signal-service/signal-service.component';
import { SignalSimpleComponent } from './signal-simple/signal-simple.component';

export const routes: Routes = [
  { path: 'signal-simple', component: SignalSimpleComponent },
  { path: 'signal-service', component: SignalServiceComponent },
  { path: 'signal-input-service', component: SignalInputServiceComponent },
  {path: "signal-observables", component: SignalObservablesComponent},
  { path: '', redirectTo: 'signal-simple', pathMatch: 'full' },
];
