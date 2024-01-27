import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermacontattoComponent } from './confermacontatto.component';

describe('ConfermacontattoComponent', () => {
  let component: ConfermacontattoComponent;
  let fixture: ComponentFixture<ConfermacontattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermacontattoComponent]
    });
    fixture = TestBed.createComponent(ConfermacontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
