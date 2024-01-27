import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreclamiComponent } from './allreclami.component';

describe('AllreclamiComponent', () => {
  let component: AllreclamiComponent;
  let fixture: ComponentFixture<AllreclamiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllreclamiComponent]
    });
    fixture = TestBed.createComponent(AllreclamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
