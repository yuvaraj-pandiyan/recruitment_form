import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationPopupComponent } from './delete-confirmation-popup.component';

describe('DeleteConfirmationPopupComponent', () => {
  let component: DeleteConfirmationPopupComponent;
  let fixture: ComponentFixture<DeleteConfirmationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteConfirmationPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
