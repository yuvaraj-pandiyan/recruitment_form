import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { common } from 'src/app/constant';
import { roleTypeList, seniorityLevelList, workExperienceList, relevantWorkExperienceList, industryList, departmentList, noOfPositionsList } from 'src/app/mock-values';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  @Input() jobDetailsFormGroup!:FormGroup;
  @Output() jobDetailsFormGroupChange = new EventEmitter<FormGroup>();
  @Output() pageChange = new EventEmitter<boolean>();

  roleTypeList = roleTypeList;
  seniorityLevelList = seniorityLevelList;
  workExperienceList = workExperienceList;
  relevantWorkExperienceList = relevantWorkExperienceList;
  industryList = industryList;
  departmentList = departmentList;
  noOfPositionsList = noOfPositionsList;

  constructor(private fb:FormBuilder) {
  }

  ngOnInit(): void {
    if (!this.jobDetailsFormGroup) {
      this.assignValuesToForm();
    }

    this.jobDetailsFormGroup.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      this.jobDetailsFormGroupChange.emit(this.jobDetailsFormGroup);
    });
  }

  get roleAndResponsibility(): FormArray {
    const roleAndResponsibilityControl = this.jobDetailsFormGroup.get('roleAndResponsibilities');
    if (roleAndResponsibilityControl instanceof FormArray) {
      return roleAndResponsibilityControl;
    } else {
      return this.fb.array([]);
    }
  }

  removeItem(index: number){
    this.roleAndResponsibility.removeAt(index)
  }

  addItem(){
    this.roleAndResponsibility.push(this.fb.control('', Validators.required)); 
  }

  assignValuesToForm(){
    this.jobDetailsFormGroup = this.fb.group({
      jobTitle: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      roleType: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      seniorityLevel: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      workExperience: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      relevantWorkExperience: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      industry: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      department: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      subDepartment: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      noOfPositions: this.fb.control('', [Validators.required, Validators.pattern(common.ALPHA_NUMERIC),Validators.pattern(common.EMPTY_SPACE)]),
      roleAndResponsibilities: this.fb.array([this.fb.control('', [Validators.required])], [Validators.required]),
      technicalSkills: this.fb.control([], [Validators.required]),
      industryKnowledgeAndSkills: this.fb.control([], [Validators.required]),
      softwareKnowledge: this.fb.control([], [Validators.required]),
    })
  }

  goToPage(value: boolean) {
    console.log("second Value ",this.jobDetailsFormGroup);   
    this.pageChange.emit(value);
  }
}

// jobDetailsFormGroup{
//   department:"Role 2"
//   industry:"Role 3"
//   jobTitle: "ghgfh"
//   noOfPositions:"Role 2"
//   relevantWorkExperience:"Role 2"
//   workExperience: "Role 1"
//   roleType: "Role 2"
//   seniorityLevel: "Role 2"
//   subDepartment: "Role 2"
//   softwareKnowledge: ['fghfgh']
//   roleAndResponsibilities:['jkhggfh']
//   industryKnowledgeAndSkills:['gdhdg']
//   technicalSkills: ['fdgd']
// }