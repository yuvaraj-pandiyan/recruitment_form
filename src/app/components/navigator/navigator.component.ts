import { Component, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  public step = 1;
  requesterInfoFormGroup!: FormGroup;
  jobDetailsFormGroup!: FormGroup;
  recruitmentRequestFormGroup !: FormGroup;
  backgroundVerificationFormGroup!: FormGroup;
  isTableOpen !: boolean;


  constructor(public api: ApiService, private toaster : ToastrService){

  }
  
  ngOnInit(): void {
    this.api.changeStep(this.step);
  }
  ngAfterViewInit(): void {
  
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
    this.api.changeStep(this.step);
  }

  submit(){
    this.toaster.success("Success");

    const payload ={
      requesterInfoFormGroup : {
        ...this.requesterInfoFormGroup?.value
      },
      jobDetailsFormGroup:{
        ...this.jobDetailsFormGroup?.value
      },
      recruitmentRequestFormGroup:{
        ...this.recruitmentRequestFormGroup?.value
      },
      backgroundVerificationFormGroup :{
        ...this.backgroundVerificationFormGroup?.value
      }

    }

    this.saveForm(payload)
  }

  saveForm(payload:object){
    this.api.saveForm(payload).subscribe({
      next:(value:any)=>{
        this.toaster.success("Success");
        this.resetForms();
      },
      error:(err:HttpErrorResponse)=>{
        this.toaster.error("Error");
        console.error(err)
      }
    })
  }

  resetForms() {
    this.requesterInfoFormGroup?.reset();
    this.jobDetailsFormGroup?.reset();
    this.recruitmentRequestFormGroup?.reset();
    this.backgroundVerificationFormGroup?.reset();
    this.step = 1; 
    this.api.changeStep(this.step);

  }

  showTable(){
    this.isTableOpen = !this.isTableOpen
  }
}
