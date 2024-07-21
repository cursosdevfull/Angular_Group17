import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalServiceComponent } from './signal-service.component';

describe('SignalServiceComponent', () => {
  let component: SignalServiceComponent;
  let fixture: ComponentFixture<SignalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
