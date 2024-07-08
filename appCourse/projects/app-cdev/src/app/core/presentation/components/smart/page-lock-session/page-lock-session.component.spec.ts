import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLockSessionComponent } from './page-lock-session.component';

describe('PageLockSessionComponent', () => {
  let component: PageLockSessionComponent;
  let fixture: ComponentFixture<PageLockSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageLockSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLockSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
