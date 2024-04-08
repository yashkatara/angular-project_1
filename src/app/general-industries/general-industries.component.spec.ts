import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralIndustriesComponent } from './general-industries.component';

describe('GeneralIndustriesComponent', () => {
  let component: GeneralIndustriesComponent;
  let fixture: ComponentFixture<GeneralIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralIndustriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
