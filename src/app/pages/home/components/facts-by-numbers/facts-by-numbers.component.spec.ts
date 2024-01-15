import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsByNumbersComponent } from './facts-by-numbers.component';

describe('FactsByNumbersComponent', () => {
  let component: FactsByNumbersComponent;
  let fixture: ComponentFixture<FactsByNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsByNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactsByNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
