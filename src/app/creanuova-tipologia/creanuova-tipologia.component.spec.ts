import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreanuovaTipologiaComponent } from './creanuova-tipologia.component';

describe('CreanuovaTipologiaComponent', () => {
  let component: CreanuovaTipologiaComponent;
  let fixture: ComponentFixture<CreanuovaTipologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreanuovaTipologiaComponent]
    });
    fixture = TestBed.createComponent(CreanuovaTipologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
