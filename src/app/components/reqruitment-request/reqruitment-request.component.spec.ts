import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqruitmentRequestComponent } from './reqruitment-request.component';

describe('ReqruitmentRequestComponent', () => {
  let component: ReqruitmentRequestComponent;
  let fixture: ComponentFixture<ReqruitmentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqruitmentRequestComponent]
    });
    fixture = TestBed.createComponent(ReqruitmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
