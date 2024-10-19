import { Component, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @ViewChild('header', { static: true }) header!: HeaderComponent;
  public step = 1;
  requesterInfoFormGroup!: FormGroup;
  jobDetailsFormGroup!: FormGroup;
  reqruitmentRequestFormGroup !: FormGroup;
  backgroundVerificationFormGroup!: FormGroup;
  
  ngOnInit(): void {
    this.header.setCurrentTab(this.step);
  }

  pageChange(isNext: boolean) {
    if (isNext) {
      if (this.step <= 5) {
        this.step++;
      }
    } else {
      if (this.step) {
        this.step--;
      }
    }

    this.header.setCurrentTab(this.step);
  }
}
