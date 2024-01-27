import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCarListComponent } from './location-car-list.component';

describe('LocationCarListComponent', () => {
  let component: LocationCarListComponent;
  let fixture: ComponentFixture<LocationCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationCarListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
