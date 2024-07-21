import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputServiceComponent } from './signal-input-service.component';

describe('SignalInputServiceComponent', () => {
  let component: SignalInputServiceComponent;
  let fixture: ComponentFixture<SignalInputServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
