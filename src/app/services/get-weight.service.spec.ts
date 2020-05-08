import { TestBed } from '@angular/core/testing';

import { GetWeightService } from './get-weight.service';

describe('GetWeightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeightService = TestBed.get(GetWeightService);
    expect(service).toBeTruthy();
  });
});
