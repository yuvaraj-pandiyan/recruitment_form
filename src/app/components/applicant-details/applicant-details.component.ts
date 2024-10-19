import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tempData : any;

  displayedColumns: string[] = ['jobTitle', 'jobType', 'industry', 'yearOfExperience', 'department', 'action'];
  dataSource = new MatTableDataSource();
  pageSizeOptions = [2,5,8,25];
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

  editUserDetails() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationPopupComponent,{
      data: { id:  this.dataSource.data } 
     
      
    },); console.log("c c",this.data);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
    }); 
  }

  data = { name :'satheesh',email:'satheesh@3gmail.com'}

 
  private fetchTableData(): void {
    this.apiServices.getTableData().subscribe({
      next: (data) => {
      this.tempData = data 
      console.log(this.tempData,"temp Data");
      
      this.dataSource.data = this.tempData.data
      console.log(this.dataSource.data,"hsfdh");
      
      },
      error: (error) => {
        console.error('Error fetching table data', error);
       
      },
    });
  }

}
