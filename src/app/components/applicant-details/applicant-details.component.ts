import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { DeleteConfirmationPopupComponent } from '../delete-confirmation-popup/delete-confirmation-popup.component';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss']
})
export class ApplicantDetailsComponent implements OnInit, AfterViewInit {

  constructor(private apiServices:ApiService,public dialog: MatDialog){

  }

  @Input() isEdit !: boolean;
  @Output() openEditPage = new EventEmitter<boolean>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectedUserId !:string;
  tempData : any;
  displayedColumns: string[] = ['jobTitle', 'jobType', 'industry', 'yearOfExperience', 'department', 'action'];
  dataSource = new MatTableDataSource();
  pageSizeOptions = [5,10,15,25];
  selectedPageSize = 5;

  ngOnInit() {
    this.fetchTableData()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUserDetails(value :  boolean) {
    this.openEditPage.emit(value)
    
  }

  openDialog(selectedData : any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationPopupComponent,{
        data:{value:selectedData}
    });
    this.selectedUserId = selectedData 

    dialogRef.afterClosed().subscribe((result: any) => {
      this.fetchTableData()
    }); 
  }

 
  private fetchTableData(): void {
    this.apiServices.getTableData().subscribe({
      next: (data) => {
      this.tempData = data       
      this.dataSource.data = this.tempData.data
      
      },
      error: (error) => {
        console.error('Error fetching table data', error);
       
      },
    });
  }

}
