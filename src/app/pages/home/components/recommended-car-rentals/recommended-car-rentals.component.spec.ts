import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCarRentalsComponent } from './recommended-car-rentals.component';

describe('RecommendedCarRentalsComponent', () => {
  let component: RecommendedCarRentalsComponent;
  let fixture: ComponentFixture<RecommendedCarRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedCarRentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedCarRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
