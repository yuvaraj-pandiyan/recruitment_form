import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {   

  constructor(
    private apiService: ApiService
  ){
    this.apiService?.changeStep$?.subscribe(res => {
      this.setCurrentTab(res)
    })
  }

  public headNavigator = [
    {id: 1, name: "Requester Info", isActive: false, isCurrentTab: false},
    {id: 2, name: "Job Details", isActive: false, isCurrentTab: false},
    {id: 3, name: "Recruitment Req's", isActive: false, isCurrentTab: false},
    {id: 4, name: "Background Verification", isActive: false, isCurrentTab: false},
    {id: 5, name: "Summary", isActive: false, isCurrentTab: false},
  ];

  setCurrentTab(id: number) {
    this.headNavigator = this.headNavigator.map((item) => {
      item.isCurrentTab = id === item.id;
      item.isActive = item.id < id; 
      return item;
    });
  }
  

  

}
