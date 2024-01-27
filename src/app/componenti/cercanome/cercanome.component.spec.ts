import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercanomeComponent } from './cercanome.component';

describe('CercanomeComponent', () => {
  let component: CercanomeComponent;
  let fixture: ComponentFixture<CercanomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercanomeComponent]
    });
    fixture = TestBed.createComponent(CercanomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
