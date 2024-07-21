import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSimpleComponent } from './signal-simple.component';

describe('SignalSimpleComponent', () => {
  let component: SignalSimpleComponent;
  let fixture: ComponentFixture<SignalSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
