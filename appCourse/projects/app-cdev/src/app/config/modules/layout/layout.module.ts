import { Injectable, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LayoutConfig {
  menuVisible?: boolean;
  headerVisible?: boolean;
}

export const CONSTANT_LAYOUT_CONFIG: LayoutConfig = {
  menuVisible: false,
  headerVisible: false,
};

export const LAYOUT_TOKEN = new InjectionToken('Layout token');

@NgModule()
export class LayoutModule {
  static forRoot(config: any): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: LAYOUT_TOKEN, useValue: config }],
    };
  }
}

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private layoutEvent: BehaviorSubject<LayoutConfig>;

  constructor() {
    this.layoutEvent = new BehaviorSubject<LayoutConfig>(
      CONSTANT_LAYOUT_CONFIG
    );
  }

  get configuration(): Observable<LayoutConfig> {
    return this.layoutEvent.asObservable();
  }

  set configuration(config: LayoutConfig) {
    const value: LayoutConfig = this.layoutEvent.getValue();
    const newConfig = Object.assign(value, config);
    this.layoutEvent.next(newConfig);
  }

  get value(): LayoutConfig {
    return this.layoutEvent.getValue();
  }
}
