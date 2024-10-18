import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent  {
  public step = 1;
  requesterInfoFormGroup!: FormGroup;
  jobDetailsFormGroup!: FormGroup;

  setFormValue(form: FormGroup) {
    switch (this.step) {
      case 1:
        this.requesterInfoFormGroup = form;
        break;

      case 2:
        this.jobDetailsFormGroup = form;
        break;
    
      default:
        break;
    }
  }

  pageChange(isNext: boolean) {
    isNext ? this.step++ : this.step--;
  }
}
