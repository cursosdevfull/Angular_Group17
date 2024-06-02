import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphStaticComponent } from './graph-static.component';

describe('GraphStaticComponent', () => {
  let component: GraphStaticComponent;
  let fixture: ComponentFixture<GraphStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
