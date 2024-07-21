import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCourseComponent } from './filter-course.component';

describe('FilterCourseComponent', () => {
  let component: FilterCourseComponent;
  let fixture: ComponentFixture<FilterCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
