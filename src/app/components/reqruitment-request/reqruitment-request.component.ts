import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reqruitment-request',
  templateUrl: './reqruitment-request.component.html',
  styleUrls: ['./reqruitment-request.component.scss']
})
export class ReqruitmentRequestComponent implements OnInit {
  
  @Input() reqruitmentRequestFormGroup!: FormGroup;
  @Output() reqruitmentRequestFormGroupChange = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {
    if (!this.reqruitmentRequestFormGroup) {
      this.assignValueToMainForm();
    }
    this.reqruitmentRequestFormGroup.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      this.reqruitmentRequestFormGroupChange.emit(this.reqruitmentRequestFormGroup);
    });
  }

  public assignValueToMainForm() {
    this.reqruitmentRequestFormGroup = this.fb.group({
      genderAndAge: this.fb.group({ 
       genderVal:['no'],
       ageVal:['no'] 
      }),
      maritalStatus:this.fb.group({
        maritalStatusVal:['no']
      }),
      physicalfitness:this.fb.group({
        massVal:['no'],
        physicalConVal:['no']
      }),
      internelMobility:this.fb.group({
        criticalVal:['no'],
        openPositioVal:['no'],
        coverdPosVal:['no']
      }),
      department:this.fb.group({
        workedPreviosly:['no'],
        workedEarly:['no']
      }),
      industries:this.fb.group({
        specifyIndustry:['no']
      }),
      companies:this.fb.group({
        workedCompany:['no'],
        currentCompany:['no']
      }),
      products:this.fb.group({
        specifyProduct:['no']
      }),
     
    });
  }

  formDetails(){
      console.log("det",this.reqruitmentRequestFormGroup.value);   
  }

  goToPage(value: boolean) {
    this.pageChange.emit(value);
  }
}