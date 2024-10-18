import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-background-verification',
  templateUrl: './background-verification.component.html',
  styleUrls: ['./background-verification.component.scss'],
})
export class BackgroundVerificationComponent {

  @Output() emitForm = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  backgroundVerification!: FormGroup;

  constructor(private fb: FormBuilder) {
this.assignValueToMainForm();
  }

  public assignValueToMainForm() {
    this.backgroundVerification = this.fb.group({
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

  ngOnInit(): void {    
    this.backgroundVerification.valueChanges.subscribe(() => {
      this.emitForm.emit(this.backgroundVerification);
    })
  }

  formDetails() {
    console.log('det', this.backgroundVerification.value);
  }
  nextPage() {
    this.pageChange.emit(true);
  }
}
