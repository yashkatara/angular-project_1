import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTechComponent } from './info-tech.component';

describe('InfoTechComponent', () => {
  let component: InfoTechComponent;
  let fixture: ComponentFixture<InfoTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
