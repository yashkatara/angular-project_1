import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jd1Component } from './jd1.component';

describe('Jd1Component', () => {
  let component: Jd1Component;
  let fixture: ComponentFixture<Jd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jd1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
