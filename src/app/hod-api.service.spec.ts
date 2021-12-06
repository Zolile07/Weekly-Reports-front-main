import { TestBed } from '@angular/core/testing';

import { HodApiService } from './hod-api.service';

describe('HodApiService', () => {
  let service: HodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
