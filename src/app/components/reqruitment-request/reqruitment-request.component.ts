import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { common } from '../../constant';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reqruitment-request',
  templateUrl: './reqruitment-request.component.html',
  styleUrls: ['./reqruitment-request.component.scss']
})
export class ReqruitmentRequestComponent implements OnInit {
  
  reqruitmentRequestComponent !: FormGroup;
  @Output() emitForm = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  

  // genderAndAge!: FormGroup;
  // maritalStatus!: FormGroup;
  // physicalfitness!: FormGroup;
  // internelMobility!: FormGroup;
  // department!: FormGroup;
  // industries!: FormGroup;
  // companies!: FormGroup;
  // products!: FormGroup;

  constructor(private fb:FormBuilder,){
    this.assignValueToMainForm()
  }

  ngOnInit(): void {    
    this.reqruitmentRequestComponent.valueChanges.subscribe(() => {
      this.emitForm.emit(this.reqruitmentRequestComponent);
    })
  }

  public assignValueToMainForm() {
    this.reqruitmentRequestComponent = this.fb.group({
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
      console.log("det",this.reqruitmentRequestComponent.value);   
  } 
   nextPage() {
    this.pageChange.emit(true);
  }
}