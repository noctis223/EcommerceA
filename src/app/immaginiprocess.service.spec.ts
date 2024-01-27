import { TestBed } from '@angular/core/testing';

import { ImmaginiprocessService } from './immaginiprocess.service';

describe('ImmaginiprocessService', () => {
  let service: ImmaginiprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmaginiprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
