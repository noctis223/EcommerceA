import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordiniComponent } from './allordini.component';

describe('AllordiniComponent', () => {
  let component: AllordiniComponent;
  let fixture: ComponentFixture<AllordiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllordiniComponent]
    });
    fixture = TestBed.createComponent(AllordiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
