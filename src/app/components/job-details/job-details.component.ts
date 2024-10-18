import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  public jobDetailsForm!:FormGroup;
  @Output() emitForm = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();
}
