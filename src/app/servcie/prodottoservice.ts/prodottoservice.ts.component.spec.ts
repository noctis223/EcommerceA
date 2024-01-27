import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoserviceTsComponent } from './prodottoservice.ts.component';

describe('ProdottoserviceTsComponent', () => {
  let component: ProdottoserviceTsComponent;
  let fixture: ComponentFixture<ProdottoserviceTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoserviceTsComponent]
    });
    fixture = TestBed.createComponent(ProdottoserviceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
