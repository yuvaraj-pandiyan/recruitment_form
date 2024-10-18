import { Component,EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { common } from '../../constant';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-requester-info',
  templateUrl: './requester-info.component.html',
  styleUrls: ['./requester-info.component.scss']
})
// 
export class RequesterInfoComponent {

  public requesterInfoGroups!:FormGroup;
  @Output() emitForm = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  constructor(private requesterInfoBuilder: FormBuilder, public dialogRef: MatDialogRef<RequesterInfoComponent>) {
    this.requestorInfoForm();
  }
  

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.requesterInfoGroups.valueChanges.subscribe(() => {
      this.emitForm.emit(this.requesterInfoGroups);
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

  nextPage() {
    this.pageChange.emit(true);
  }
}
