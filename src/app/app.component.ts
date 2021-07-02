import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-users';
  name='Yishai';
  shuldDisplayUsers: boolean=true
  tuggleButtonClick=()=>{
    this.shuldDisplayUsers=!this.shuldDisplayUsers;
  }
}
