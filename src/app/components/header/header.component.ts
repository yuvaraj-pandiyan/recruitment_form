import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public headNavigator = [
    {name: "Requester Info", isActive: false, isCurrentTab: true},
    {name: "Job Details", isActive: false, isCurrentTab: false},
    {name: "Recruitment Req's", isActive: false, isCurrentTab: false},
    {name: "Background Verification", isActive: false, isCurrentTab: false},
    {name: "Summary", isActive: false, isCurrentTab: false},
  ]

}
