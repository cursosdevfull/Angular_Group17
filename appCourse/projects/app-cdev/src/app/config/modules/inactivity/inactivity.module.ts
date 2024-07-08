import { Inject, Injectable, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { bufferTime, fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';

export interface InactivityConfig {
  timeout: number;
}

export const CONSTANT_INACTIVITY_CONFIG: InactivityConfig = {
  timeout: 20 * 60 * 1000, // 20*60*1000 = 20 minutes * 60 seconds * 1,
};

export const INACTIVITY_TOKEN = new InjectionToken('INACTIVITY_TOKEN');

@NgModule()
export class InactivityModule {
  static forRoot(
    config: InactivityConfig
  ): ModuleWithProviders<InactivityModule> {
    return {
      ngModule: InactivityModule,
      providers: [{ provide: INACTIVITY_TOKEN, useValue: config }],
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private timeout: number;
  private idleActivity: Observable<any>;

  private idleEvent: Subject<boolean> = new Subject<boolean>();
  private idleSubscription: Subscription | undefined;

  constructor(@Inject(INACTIVITY_TOKEN) private config: InactivityConfig) {
    this.timeout = config.timeout;

    this.idleActivity = merge(
      fromEvent(window, 'mousemove'), //document.addEventListener('mousemove', () => {});
      fromEvent(window, 'resize'), //document.addEventListener('resize', () => {});
      fromEvent(window, 'keydown') //document.addEventListener('keydown', () => {});
    );
  }

  startWatching() {
    this.idleEvent.next(false);
    this.idleSubscription = this.idleActivity
      .pipe(bufferTime(this.timeout))
      .subscribe((response: Array<any>) => {
        if (response.length === 0) {
          console.log('Inactivity detected');
          this.lockedSession();
        }
      });
  }

  lockedSession() {
    this.idleEvent.next(true);
    this.stopWatching();
  }

  private stopWatching() {
    this.idleSubscription?.unsubscribe();
  }

  getInactivityEvent(): Observable<boolean> {
    return this.idleEvent.asObservable();
  }

  /*   ngOnInit() {
    const config = inject(INACTIVITY_TOKEN);
  } */
}
