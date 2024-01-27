import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofereclamoComponent } from './cofereclamo.component';

describe('CofereclamoComponent', () => {
  let component: CofereclamoComponent;
  let fixture: ComponentFixture<CofereclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CofereclamoComponent]
    });
    fixture = TestBed.createComponent(CofereclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
