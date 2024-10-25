import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequesterInfoComponent }from '../requester-info/requester-info.component'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @Input()requesterInfoFormGroup!:FormGroup
  @Input() isEdit !: boolean;
  @Output() cancelForm = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();
  @Output() submitEmmiter = new EventEmitter<boolean>();
  
  constructor(private dialog:MatDialog){
  }

  openEditPageAsDialog(){
    const dialogRef = this.dialog.open(RequesterInfoComponent,{
      disableClose: false,
      data :this.requesterInfoFormGroup
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  

  submit(){
    this.submitEmmiter.emit(true);
    
  }

  update(){
    this.updateEvent.emit()
  }

  cancel(){
    this.cancelForm.emit()
  }

}
