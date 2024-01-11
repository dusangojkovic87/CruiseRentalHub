import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarsListComponent } from './popular-cars-list.component';

describe('PopularCarsListComponent', () => {
  let component: PopularCarsListComponent;
  let fixture: ComponentFixture<PopularCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCarsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
