import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDetailComponent } from './films-detail.component';

describe('FilmsDetailComponent', () => {
  let component: FilmsDetailComponent;
  let fixture: ComponentFixture<FilmsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
