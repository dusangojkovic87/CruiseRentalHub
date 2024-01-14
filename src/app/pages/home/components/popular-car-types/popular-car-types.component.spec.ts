import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarTypesComponent } from './popular-car-types.component';

describe('PopularCarTypesComponent', () => {
  let component: PopularCarTypesComponent;
  let fixture: ComponentFixture<PopularCarTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCarTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularCarTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
