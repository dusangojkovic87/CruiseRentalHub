import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPackageComponent } from './pricing-package.component';

describe('PricingPackageComponent', () => {
  let component: PricingPackageComponent;
  let fixture: ComponentFixture<PricingPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
