import { Component, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/constant';

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
  isTableOpen : boolean = false;
  isEdit : boolean = false;

  selectedId !: any;
  constructor(public api: ApiService, private toaster : ToastrService, public fb:FormBuilder ){ }
  
  ngOnInit(): void {
    this.api.changeStep(this.step);
    this.requestorInfoForm()
    this.bgv()
    this.rec()
    this.assignValuesToForm()
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
    
    if(this.requesterInfoFormGroup.value?.dontReportNo){
      this.requesterInfoFormGroup.get('managerName')?.setValue('');
      this.requesterInfoFormGroup.get('managerLastName')?.setValue('');
      this.requesterInfoFormGroup.get('managerJobTitle')?.setValue('');
      this.requesterInfoFormGroup.get('managerEmail')?.setValue('');
    }

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
     
  update(){

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
   
    
    this.updateApiCall(payload)
  }

  updateApiCall(payload : object){
    this.api.updateJobForm(this.selectedId, payload).subscribe({
      next:(value)=>{
        this.toaster.success("Update Succes")
        this.resetForms()
        this.isEdit = !this.isEdit
        // this.selectedId = ''
      },
      error:(err:HttpErrorResponse)=>{
        this.toaster.error("Error")
      }
    })
  }

  openEditPage(userId : any){
    this.isEdit = !this.isEdit    
    this.getParticularRecord(userId)
    this.selectedId = userId
    this.showTable()
    this.step = 1;
    
  }

  getParticularRecord( id: string){
    this.api.getDataById(id).subscribe({
      next: (userVal) => {      
        const editData = userVal
        this.patchTheApiData(editData)
      },
      error: (error) => {
        console.error('Error fetching', error);
       
      },
    });
  }

  patchTheApiData(editData : any){
    this.requesterInfoFormGroup.patchValue({...editData.data.requesterInfoFormGroup});
    if (editData.data.requesterInfoFormGroup.dontReportNo) {
      this.requesterInfoFormGroup.get('managerName')?.clearValidators();
      this.requesterInfoFormGroup.get('managerLastName')?.clearValidators();
      this.requesterInfoFormGroup.get('managerJobTitle')?.clearValidators();
      this.requesterInfoFormGroup.get('managerEmail')?.clearValidators();
      this.requesterInfoFormGroup.get('managerName')?.updateValueAndValidity();
      this.requesterInfoFormGroup.get('managerLastName')?.updateValueAndValidity();
      this.requesterInfoFormGroup.get('managerJobTitle')?.updateValueAndValidity();
      this.requesterInfoFormGroup.get('managerEmail')?.updateValueAndValidity();
    }

    this.jobDetailsFormGroup.patchValue({...editData.data.jobDetailsFormGroup});

    this.recruitmentRequestFormGroup.patchValue({...editData.data.recruitmentRequestFormGroup});

    this.backgroundVerificationFormGroup.patchValue({...editData.data.backgroundVerificationFormGroup});
  }

  resetForms() {
    this.requesterInfoFormGroup?.reset();
    this.requestorInfoForm();
    this.jobDetailsFormGroup?.reset();
    this.recruitmentRequestFormGroup?.reset(); 
    this.backgroundVerificationFormGroup?.reset();

    this.rec()
    this.bgv()

    this.step = 1; 
    this.api.changeStep(this.step);
  }

  cancel(){
    this.resetForms()
    this.step = 1
    this.isEdit = false
    this.isTableOpen = false
  }

  showTable(){
    this.isTableOpen = !this.isTableOpen
    if(this.isEdit && !this.isTableOpen){
      this.resetForms()
    }
    
  }
  

  public bgv() {
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

  public rec() {
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
  
  assignValuesToForm(){
    this.jobDetailsFormGroup = this.fb.group({
      jobTitle: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      roleType: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      seniorityLevel: this.fb.control('', [Validators.required]),
      workExperience: this.fb.control('', [Validators.required]),
      relevantWorkExperience: this.fb.control('', [Validators.required]),
      industry: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      department: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      subDepartment: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      noOfPositions: this.fb.control('', [Validators.required]),
      roleAndResponsibilities: this.fb.array([this.fb.control('', [Validators.required])], [Validators.required]),
      technicalSkills: this.fb.control([], [Validators.required]),
      industryKnowledgeAndSkills: this.fb.control([], [Validators.required]),
      softwareKnowledge: this.fb.control([], [Validators.required]),
    })
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

}