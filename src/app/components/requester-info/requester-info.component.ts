import { Component,EventEmitter,Inject,Input,OnChanges,OnInit,Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { common } from '../../constant';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-requester-info',
  templateUrl: './requester-info.component.html',
  styleUrls: ['./requester-info.component.scss']
})
// 
export class RequesterInfoComponent implements OnInit, OnChanges {

  @Input() requesterInfoFormGroup!: FormGroup;
  @Output() requesterInfoFormGroupChange = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();
  public opeanInPopUp:boolean =false

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<RequesterInfoComponent>, @Inject(MAT_DIALOG_DATA)public inputDialogData:any ) {

    if(Object?.keys(inputDialogData||{})?.length){
      this.opeanInPopUp=true;
      this.requesterInfoFormGroup = inputDialogData;
    }
  }  

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (!this.requesterInfoFormGroup) {
      this.requestorInfoForm();
    }
    this.requesterInfoFormGroup.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      this.requesterInfoFormGroupChange.emit(this.requesterInfoFormGroup);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (Object.keys(changes).includes('requesterInfoFormGroup')) {
      console.log('this.requesterInfoFormGroup', this.requesterInfoFormGroup);
    }
  }

  requestorInfoForm(){
    this.requesterInfoFormGroup = this.fb.group({
      requesterFullName: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      requesterLastName: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      requesterEmail: this.fb.control('', [Validators.required, Validators.email,this.customEmailValidator]),
      requesterWebUrl: this.fb.control('', [Validators.required, Validators.pattern(common.URL)]),
      requesterJobTitle: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      managerName: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      managerLastName: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]),
      managerEmail: this.fb.control('', [Validators.required, Validators.email,this.customEmailValidator]),
      managerJobTitle: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      dontReportYes: this.fb.control(true),
      dontReportNo: this.fb.control(false),
    });
  }

  onCheckboxChange(value: string) {
    if (value === 'yes') {
      this.requesterInfoFormGroup.get('dontReportYes')?.setValue(true);
      this.requesterInfoFormGroup.get('dontReportNo')?.setValue(false);
      this.requesterInfoFormGroup.get('managerName')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoFormGroup.get('managerLastName')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoFormGroup.get('managerJobTitle')?.addValidators([Validators.required, Validators.pattern(common.ALPHABETS),Validators.pattern(common.EMPTY_SPACE)]);
      this.requesterInfoFormGroup.get('managerEmail')?.addValidators([Validators.required, Validators.email,this.customEmailValidator]);
    } else if (value === 'no') {
      this.requesterInfoFormGroup.get('dontReportYes')?.setValue(false);
      this.requesterInfoFormGroup.get('dontReportNo')?.setValue(true);
      this.requesterInfoFormGroup.get('managerName')?.clearValidators();
      this.requesterInfoFormGroup.get('managerLastName')?.clearValidators();
      this.requesterInfoFormGroup.get('managerJobTitle')?.clearValidators();
      this.requesterInfoFormGroup.get('managerEmail')?.clearValidators();
    }
    this.requesterInfoFormGroup.get('managerName')?.updateValueAndValidity();
    this.requesterInfoFormGroup.get('managerLastName')?.updateValueAndValidity();
    this.requesterInfoFormGroup.get('managerJobTitle')?.updateValueAndValidity();
    this.requesterInfoFormGroup.get('managerEmail')?.updateValueAndValidity();
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

  nextPage() {

    // if (!this.requesterInfoFormGroup.get('dontReportYes')?.value === true) {
    //   this.requesterInfoFormGroup.get('managerName')?.setValue('');
    //   this.requesterInfoFormGroup.get('managerLastName')?.setValue('');
    //   this.requesterInfoFormGroup.get('managerJobTitle')?.setValue('');
    //   this.requesterInfoFormGroup.get('managerEmail')?.setValue('');
    // }
   
    console.log("Requeste Info 1ST page : ", this.requesterInfoFormGroup);
    this.pageChange.emit(true);
  }

  save(){
   this.dialogRef.close();
  }
}

// requesterInfoFormGroup{
//     dontReportNo: false
//     dontReportYes: true
//     managerEmail: "mail"
//     managerJobTitle: ""
//     managerLastName: ""
//     managerName: ""
//     requesterEmail: "mail"
//     requesterFullName: ""
//     requesterJobTitle: ""
//     requesterLastName: ""
//     requesterWebUrl: "websiteURL"
// }