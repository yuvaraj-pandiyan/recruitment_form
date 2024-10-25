import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-confirmation-popup',
  templateUrl: './delete-confirmation-popup.component.html',
  styleUrls: ['./delete-confirmation-popup.component.scss']
})
export class DeleteConfirmationPopupComponent implements OnDestroy{

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private api : ApiService,
    private toaster : ToastrService
  ) {}

  onConfirm(): void {
    this.deleteForm(this.data.value)
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }

  deleteForm(id:string){
    this.api.deleteJobForm(id).subscribe({
      next:(value)=>{
        this.dialogRef.close(true); 
        this.toaster.success('Delete Success')
        console.error("Record Deleted..");    
      },
      error:(err)=>{
        this.dialogRef.close(false);
      }
    })
  }

  ngOnDestroy(): void {
    
  }
}
