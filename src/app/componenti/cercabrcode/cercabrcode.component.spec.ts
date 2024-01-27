import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercabrcodeComponent } from './cercabrcode.component';

describe('CercabrcodeComponent', () => {
  let component: CercabrcodeComponent;
  let fixture: ComponentFixture<CercabrcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercabrcodeComponent]
    });
    fixture = TestBed.createComponent(CercabrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
