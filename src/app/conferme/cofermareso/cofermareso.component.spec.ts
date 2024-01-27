import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofermaresoComponent } from './cofermareso.component';

describe('CofermaresoComponent', () => {
  let component: CofermaresoComponent;
  let fixture: ComponentFixture<CofermaresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CofermaresoComponent]
    });
    fixture = TestBed.createComponent(CofermaresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
