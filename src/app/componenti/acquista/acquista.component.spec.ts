import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistaComponent } from './acquista.component';

describe('AcquistaComponent', () => {
  let component: AcquistaComponent;
  let fixture: ComponentFixture<AcquistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcquistaComponent]
    });
    fixture = TestBed.createComponent(AcquistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
