import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiquantitaComponent } from './aggiungiquantita.component';

describe('AggiungiquantitaComponent', () => {
  let component: AggiungiquantitaComponent;
  let fixture: ComponentFixture<AggiungiquantitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiquantitaComponent]
    });
    fixture = TestBed.createComponent(AggiungiquantitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
