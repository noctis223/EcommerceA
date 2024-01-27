import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreresoComponent } from './errorereso.component';

describe('ErroreresoComponent', () => {
  let component: ErroreresoComponent;
  let fixture: ComponentFixture<ErroreresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroreresoComponent]
    });
    fixture = TestBed.createComponent(ErroreresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
