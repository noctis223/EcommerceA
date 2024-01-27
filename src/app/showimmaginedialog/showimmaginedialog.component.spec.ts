import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowimmaginedialogComponent } from './showimmaginedialog.component';

describe('ShowimmaginedialogComponent', () => {
  let component: ShowimmaginedialogComponent;
  let fixture: ComponentFixture<ShowimmaginedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowimmaginedialogComponent]
    });
    fixture = TestBed.createComponent(ShowimmaginedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
