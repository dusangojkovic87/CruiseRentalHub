import { TestBed } from '@angular/core/testing';

import { PopularCarsService } from './popular-cars.service';

describe('PopularCarsService', () => {
  let service: PopularCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
