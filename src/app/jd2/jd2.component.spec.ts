import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jd2Component } from './jd2.component';

describe('Jd2Component', () => {
  let component: Jd2Component;
  let fixture: ComponentFixture<Jd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jd2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
