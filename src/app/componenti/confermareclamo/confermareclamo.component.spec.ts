import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermareclamoComponent } from './confermareclamo.component';

describe('ConfermareclamoComponent', () => {
  let component: ConfermareclamoComponent;
  let fixture: ComponentFixture<ConfermareclamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermareclamoComponent]
    });
    fixture = TestBed.createComponent(ConfermareclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
