import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VediprodottoComponent } from './vediprodotto.component';

describe('VediprodottoComponent', () => {
  let component: VediprodottoComponent;
  let fixture: ComponentFixture<VediprodottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VediprodottoComponent]
    });
    fixture = TestBed.createComponent(VediprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
