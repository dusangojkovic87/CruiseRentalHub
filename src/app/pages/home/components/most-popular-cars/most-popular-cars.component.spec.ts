import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularCarsComponent } from './most-popular-cars.component';

describe('MostPopularCarsComponent', () => {
  let component: MostPopularCarsComponent;
  let fixture: ComponentFixture<MostPopularCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostPopularCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPopularCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
