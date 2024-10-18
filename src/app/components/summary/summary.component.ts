import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequesterInfoComponent }from '../requester-info/requester-info.component'
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  constructor(private dialog:MatDialog){}

   check(){
    const dialogRef = this.dialog.open(RequesterInfoComponent,{
      width:'100vw',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog was closed', result);
    });
  }
}
