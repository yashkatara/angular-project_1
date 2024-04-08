import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDiviceComponent } from './medical-divice.component';

describe('MedicalDiviceComponent', () => {
  let component: MedicalDiviceComponent;
  let fixture: ComponentFixture<MedicalDiviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalDiviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalDiviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
