import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaordineComponent } from './confermaordine.component';

describe('ConfermaordineComponent', () => {
  let component: ConfermaordineComponent;
  let fixture: ComponentFixture<ConfermaordineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermaordineComponent]
    });
    fixture = TestBed.createComponent(ConfermaordineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
