import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-confirmation-popup',
  templateUrl: './delete-confirmation-popup.component.html',
  styleUrls: ['./delete-confirmation-popup.component.scss']
})
export class DeleteConfirmationPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string}, private api : ApiService
  ) {}

  onConfirm(): void {
    console.log("data",this.data.id);
    
  this.deleteForm(this.data?.id)
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }

  deleteForm(id:string){
    this.api.deleteJobForm(id).subscribe({
      next:(value)=>{
        this.dialogRef.close(true); 
      },
      error:(err)=>{
        this.dialogRef.close(false);
      }
    })
  }
}
