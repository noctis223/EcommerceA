import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiprodottoComponent } from './aggiungiprodotto.component';

describe('AggiungiprodottoComponent', () => {
  let component: AggiungiprodottoComponent;
  let fixture: ComponentFixture<AggiungiprodottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiprodottoComponent]
    });
    fixture = TestBed.createComponent(AggiungiprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
