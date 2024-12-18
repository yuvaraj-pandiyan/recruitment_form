import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCardComponent } from './input-card.component';

describe('InputCardComponent', () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCardComponent]
    });
    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
