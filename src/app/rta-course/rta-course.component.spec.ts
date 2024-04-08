import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTACourseComponent } from './rta-course.component';

describe('RTACourseComponent', () => {
  let component: RTACourseComponent;
  let fixture: ComponentFixture<RTACourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTACourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTACourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
