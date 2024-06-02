import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageScheduleComponent } from './page-schedule.component';

describe('PageScheduleComponent', () => {
  let component: PageScheduleComponent;
  let fixture: ComponentFixture<PageScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
