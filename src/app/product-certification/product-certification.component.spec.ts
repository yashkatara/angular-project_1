import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCertificationComponent } from './product-certification.component';

describe('ProductCertificationComponent', () => {
  let component: ProductCertificationComponent;
  let fixture: ComponentFixture<ProductCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
