import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreclamoComponent } from './erroreclamo.component';

describe('ErroreclamoComponent', () => {
  let component: ErroreclamoComponent;
  let fixture: ComponentFixture<ErroreclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroreclamoComponent]
    });
    fixture = TestBed.createComponent(ErroreclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
