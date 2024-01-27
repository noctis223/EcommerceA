import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaprodottoComponent } from './confermaprodotto.component';

describe('ConfermaprodottoComponent', () => {
  let component: ConfermaprodottoComponent;
  let fixture: ComponentFixture<ConfermaprodottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermaprodottoComponent]
    });
    fixture = TestBed.createComponent(ConfermaprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
