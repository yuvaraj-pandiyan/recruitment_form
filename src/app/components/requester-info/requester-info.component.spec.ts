import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesterInfoComponent } from './requester-info.component';

describe('RequesterInfoComponent', () => {
  let component: RequesterInfoComponent;
  let fixture: ComponentFixture<RequesterInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesterInfoComponent]
    });
    fixture = TestBed.createComponent(RequesterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
