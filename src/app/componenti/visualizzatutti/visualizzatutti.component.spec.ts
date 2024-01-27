import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzatuttiComponent } from './visualizzatutti.component';

describe('VisualizzatuttiComponent', () => {
  let component: VisualizzatuttiComponent;
  let fixture: ComponentFixture<VisualizzatuttiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizzatuttiComponent]
    });
    fixture = TestBed.createComponent(VisualizzatuttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
