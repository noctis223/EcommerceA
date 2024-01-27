import { TestBed } from '@angular/core/testing';

import { ProdottoEditService } from './prodotto-edit.service';

describe('ProdottoEditService', () => {
  let service: ProdottoEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottoEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
