import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reqruitment-request',
  templateUrl: './reqruitment-request.component.html',
  styleUrls: ['./reqruitment-request.component.scss']
})
export class ReqruitmentRequestComponent implements OnInit {
  
  @Input() recruitmentRequestFormGroup!: FormGroup;
  @Output() recruitmentRequestFormGroupChange = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {
    if (!this.recruitmentRequestFormGroup) {
      this.assignValueToMainForm();
    }
    this.recruitmentRequestFormGroup.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      this.recruitmentRequestFormGroupChange.emit(this.recruitmentRequestFormGroup);
    });
  }

  public assignValueToMainForm() {
    this.recruitmentRequestFormGroup = this.fb.group({
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


  goToPage(value: boolean) {
    this.pageChange.emit(value);
  }
}

// recruitmentRequestFormGroup{
// companies: {workedCompany: 'no', currentCompany: 'no'}
// department: {workedPreviosly: 'no', workedEarly: 'no'}
// genderAndAge: {genderVal: 'no', ageVal: 'no'}
// industries: {specifyIndustry: 'no'}
// internelMobility: {criticalVal: 'no', openPositioVal: 'no', coverdPosVal: 'no'}
// maritalStatus: {maritalStatusVal: 'no'}
// physicalfitness: {massVal: 'no', physicalConVal: 'no'}
// products: {specifyProduct: 'no'}
// }