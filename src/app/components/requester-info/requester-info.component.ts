import { Component,SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, interval, map } from 'rxjs';
import { RequesterService } from '../../components/requester.service';
import { common, formValidStatus } from '../../constant';
@Component({
  selector: 'app-requester-info',
  templateUrl: './requester-info.component.html',
  styleUrls: ['./requester-info.component.scss']
})
// 
export class RequesterInfoComponent {

  requesterFirstName = 0
  public requesterInfoGroups!:FormGroup | any;
  currentForm = 1;
  constructor(private requesterInfoBuilder:FormBuilder, private recruitmentRequestForm$:RequesterService){}

  ngOnInit(): void {
    let isExist = this.recruitmentRequestForm$.listOfFormDetails.find((val:any) => val.formName ==='requester');
    if (isExist){
      this.requesterInfoGroups = isExist.formDetails;
      this.requesterInfoGroups.controls['dontReportNo'].value === true ? this.onCheckboxChange('no') : '';
    }
    else if(localStorage.getItem('requester')){
      this.requestorInfoForm();
      const requestorValues:any = localStorage.getItem('requester');
      const retrievedFormData = JSON.parse(requestorValues);
      this.requesterInfoGroups.patchValue(retrievedFormData);     
      this.requesterInfoGroups.updateValueAndValidity();
      this.requesterInfoGroups.controls['dontReportNo'].value === true ? this.onCheckboxChange('no') : '';
      this.recruitmentRequestForm$.formValidator.next({status: 'VALID'});
    }
    else{
      this.requestorInfoForm();
    }
      this.recruitmentRequestForm$.currentStepper.next({ action: 'first', value:'0' });
    this.recruitmentRequestForm$.formValidator.next(this.requesterInfoGroups);
    this.requesterInfoGroups.valueChanges
      .pipe(debounceTime(250))
      .subscribe((value:any) => {
        isExist = this.recruitmentRequestForm$.listOfFormDetails.find((val:any) => val.formName ==='requester');

        this.recruitmentRequestForm$.formValidator.next(this.requesterInfoGroups);
        if(!Boolean(isExist)){
          this.recruitmentRequestForm$.listOfFormDetails.push({formName:'requester', formDetails:this.requesterInfoGroups});
        }
        const isEdit = localStorage.getItem('isEdit') === '1' ? true : false;
        if(!isEdit) {
          localStorage.setItem('requester', JSON.stringify(this.requesterInfoGroups.value));
          let totalFormValidStatus = localStorage.getItem('totalFormValidStatus') ? JSON.parse(localStorage.getItem('totalFormValidStatus') as string ): formValidStatus;
          totalFormValidStatus['stage 1'] = this.requesterInfoGroups.status;
          localStorage.setItem('totalFormValidStatus',JSON.stringify(totalFormValidStatus));
        }
      }); 
  }

  requestorInfoForm(){
    this.requesterInfoGroups = this.requesterInfoBuilder.group({
      requesterFullName: new FormControl('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      requesterLastName: new FormControl('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      requesterEmail: new FormControl('', [Validators.required, Validators.email,this.customEmailValidator]),
      requesterWebUrl: new FormControl('', [Validators.required, Validators.pattern(common.URL)]),
      requesterJobTitle: new FormControl('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      managerName: new FormControl('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      managerLastName: new FormControl('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      managerEmail: new FormControl('', [Validators.required, Validators.email,this.customEmailValidator]),
      managerJobTitle: new FormControl('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      dontReportYes: new FormControl(true),
      dontReportNo: new FormControl(false),
      managerApprove: new FormControl('', [Validators.required])
    });
  }

  onCheckboxChange(value: string) {
    if (value === 'yes') {
      this.requesterInfoGroups.get('dontReportYes')?.setValue(true);
      this.requesterInfoGroups.get('dontReportNo')?.setValue(false);
      this.requesterInfoGroups.get('managerName')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoGroups.get('managerLastName')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoGroups.get('managerJobTitle')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoGroups.get('managerEmail')?.addValidators([Validators.required, Validators.email,this.customEmailValidator]);
    } else if (value === 'no') {
      this.requesterInfoGroups.get('dontReportYes')?.setValue(false);
      this.requesterInfoGroups.get('dontReportNo')?.setValue(true);
      this.requesterInfoGroups.get('managerName')?.clearValidators();
      this.requesterInfoGroups.get('managerLastName')?.clearValidators();
      this.requesterInfoGroups.get('managerJobTitle')?.clearValidators();
      this.requesterInfoGroups.get('managerEmail')?.clearValidators();
    }
    this.requesterInfoGroups.get('managerName')?.updateValueAndValidity();
    this.requesterInfoGroups.get('managerLastName')?.updateValueAndValidity();
    this.requesterInfoGroups.get('managerJobTitle')?.updateValueAndValidity();
    this.requesterInfoGroups.get('managerEmail')?.updateValueAndValidity();
  }

  customEmailValidator(control: AbstractControl): ValidationErrors | null {
    const emailValidity = Validators.email(control);
    
    if (emailValidity) {
      return emailValidity;
    }
  
    const emailParts = control.value ? control.value.split('@') : [];
    const domain = emailParts[1];
  
    if (!domain?.includes('.')) {
      return { 'invalidDomain': true };
    }
  
    return null;
  }

  nextPage(){
    this.currentForm = this.currentForm+1;
  }
}
