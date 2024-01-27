import { TestBed } from '@angular/core/testing';

import { AcquistaprodottoserviceService } from './acquistaprodottoservice.service';

describe('AcquistaprodottoserviceService', () => {
  let service: AcquistaprodottoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcquistaprodottoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
