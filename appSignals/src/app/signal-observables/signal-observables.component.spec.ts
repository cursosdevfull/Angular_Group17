import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalObservablesComponent } from './signal-observables.component';

describe('SignalObservablesComponent', () => {
  let component: SignalObservablesComponent;
  let fixture: ComponentFixture<SignalObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
