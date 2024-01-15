import { TestBed } from '@angular/core/testing';

import { FactsByNumbersService } from './facts-by-numbers.service';

describe('FactsByNumbersService', () => {
  let service: FactsByNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactsByNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
