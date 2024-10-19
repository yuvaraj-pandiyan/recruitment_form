import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss']
})
export class ApplicantDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tempData = [
    { "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6", "jobTitle": "Software Engineer", "jobType": "Full-Time", "industry": "Technology", "yearOfExperience": "3 years", "department": "Development" },
    { "id": "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7", "jobTitle": "Product Manager", "jobType": "Full-Time", "industry": "Technology", "yearOfExperience": "5 years", "department": "Product" },
    { "id": "c3d4e5f6-g7h8-9i0j-k1l2-m3n4o5p6q7r8", "jobTitle": "Graphic Designer", "jobType": "Part-Time", "industry": "Design", "yearOfExperience": "2 years", "department": "Design" },
    { "id": "d4e5f6g7-h8i9-0j1k-l2m3-n4o5p6q7r8s9", "jobTitle": "Data Analyst", "jobType": "Contract", "industry": "Finance", "yearOfExperience": "4 years", "department": "Analytics" },
    { "id": "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0", "jobTitle": "HR Coordinator", "jobType": "Full-Time", "industry": "Human Resources", "yearOfExperience": "1 year", "department": "HR" },
    { "id": "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1", "jobTitle": "Sales Representative", "jobType": "Full-Time", "industry": "Sales", "yearOfExperience": "3 years", "department": "Sales" },
    { "id": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2", "jobTitle": "Marketing Specialist", "jobType": "Full-Time", "industry": "Marketing", "yearOfExperience": "2 years", "department": "Marketing" },
    { "id": "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3", "jobTitle": "Web Developer", "jobType": "Contract", "industry": "Technology", "yearOfExperience": "4 years", "department": "Development" },
    { "id": "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4", "jobTitle": "SEO Specialist", "jobType": "Part-Time", "industry": "Marketing", "yearOfExperience": "3 years", "department": "Marketing" },
    { "id": "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5", "jobTitle": "Customer Service Representative", "jobType": "Full-Time", "industry": "Customer Support", "yearOfExperience": "2 years", "department": "Support" },
    { "id": "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6", "jobTitle": "Network Administrator", "jobType": "Full-Time", "industry": "IT", "yearOfExperience": "5 years", "department": "IT" },
    { "id": "l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7", "jobTitle": "Business Analyst", "jobType": "Contract", "industry": "Consulting", "yearOfExperience": "3 years", "department": "Analytics" },
    { "id": "m3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a7b8", "jobTitle": "Content Writer", "jobType": "Part-Time", "industry": "Media", "yearOfExperience": "2 years", "department": "Content" },
    { "id": "n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9", "jobTitle": "Project Manager", "jobType": "Full-Time", "industry": "Construction", "yearOfExperience": "6 years", "department": "Management" },
    { "id": "o5p6q7r8-s9t0-u1v2-w3x4-y5z6a7b8c9d0", "jobTitle": "Quality Assurance Tester", "jobType": "Full-Time", "industry": "Technology", "yearOfExperience": "4 years", "department": "QA" },
    { "id": "p6q7r8s9-t0u1-v2w3-x4y5-z6a7b8c9d0e1", "jobTitle": "Finance Manager", "jobType": "Full-Time", "industry": "Finance", "yearOfExperience": "7 years", "department": "Finance" },
    { "id": "q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2", "jobTitle": "Research Scientist", "jobType": "Full-Time", "industry": "Biotechnology", "yearOfExperience": "5 years", "department": "Research" },
    { "id": "r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3", "jobTitle": "Systems Analyst", "jobType": "Contract", "industry": "IT", "yearOfExperience": "4 years", "department": "IT" },
  ];

  displayedColumns: string[] = ['jobTitle', 'jobType', 'industry', 'yearOfExperience', 'department'];
  dataSource = new MatTableDataSource();
  pageSizeOptions = [2, 10, 25];
  selectedPageSize = 5;

  ngOnInit() {
    this.dataSource.data = this.tempData; 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser() {
    // Implement delete logic
  }

  openDialog() {
    // Implement dialog logic
  }
}
