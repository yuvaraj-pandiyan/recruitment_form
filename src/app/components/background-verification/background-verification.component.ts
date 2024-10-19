import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-background-verification',
  templateUrl: './background-verification.component.html',
  styleUrls: ['./background-verification.component.scss'],
})
export class BackgroundVerificationComponent implements OnInit {

  @Output() backgroundVerificationFormGroupChange = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();
  @Input() backgroundVerificationFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (!this.backgroundVerificationFormGroup) {
      this.assignValueToMainForm();
    }
    this.backgroundVerificationFormGroup.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      this.backgroundVerificationFormGroupChange.emit(this.backgroundVerificationFormGroup);
    })
  }

  public assignValueToMainForm() {
    this.backgroundVerificationFormGroup = this.fb.group({
      generalDetails: this.fb.group({
        applicantPaySlips: ['no'],
        applicantBankStatement: ['no'],
        applicantEducationBackground: ['no'],
        applicantPrevManagerDet: ['no'],
        applicantTotalExperience: ['no'],
        applicantWorkedIndustry: ['no'],
        applicantWorkedCompanyList: ['no'],
        applicantWorkMode: ['no'],
        applicantWorkedProduct: ['no'],
        applicantCertificationDet: ['no'],
        applicantProofOfResidency: ['no'],
        applicantPassport: ['no'],
        applicantId: ['no'],
        applicantForignLang: ['no'],
        applicantPostDegree: ['no'],
        applicantDiploma: ['no'],
      }),
      creditDetails: this.fb.group({
        applicantCreditScore: ['no'],
        applicantTotalLoans: ['no'],
        apllicantCreditCartInfo: ['no'],
      }),
      ativityDetails: this.fb.group({
        applicantCriminalActivity: ['no'],
        applicantCyberSecurityActivity: ['no'],
      }),
    });
  }

 
  
  goToPage(value: boolean) {
    console.log("4 th form : ",this.backgroundVerificationFormGroup);
    
    this.pageChange.emit(value);
  }
}

// backgroundVerificationFormGroup {

// ativityDetails: {
//   applicantCriminalActivity: 'no', 
//   applicantCyberSecurityActivity: 'no'
// }
// creditDetails: {
//   applicantCreditScore: 'no', 
//   applicantTotalLoans: 'no', 
//   apllicantCreditCartInfo: 'no'
// }
// generalDetails: {
//   applicantPaySlips: 'no',
//   applicantBankStatement: 'no',
//   applicantEducationBackground: 'no',
//   applicantPrevManagerDet: 'no',
//   applicantTotalExperience: 'no',
//   applicantWorkedIndustry: 'no',
//   applicantWorkedCompanyList: 'no',
//   applicantWorkMode: 'no',
//   applicantWorkedProduct: 'no',
//   applicantCertificationDet: 'no',
//   applicantProofOfResidency: 'no',
//   applicantPassport: 'no',
//   applicantId: 'no',
//   applicantForignLang: 'no',
//   applicantPostDegree: 'no',
//   applicantDiploma: 'no',
// }
// }