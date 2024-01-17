import { TestBed } from '@angular/core/testing';

import { RecommendedCarDealsService } from './recommended-car-deals.service';

describe('RecommendedCarDealsService', () => {
  let service: RecommendedCarDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedCarDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
