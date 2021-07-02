import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class userDetailsComponent implements OnInit {
  @Input() user?: User;
  @Output() newItemEvent = new EventEmitter();
  editUser() {
    this.newItemEvent.emit();
    console.log('edit from user details');
  }
  @Output() deleteUserEvent = new EventEmitter<User>();
  deleteUser(user:User) {
    this.deleteUserEvent.emit(user);
    console.log('delete from user details comp');
  }
  edit : boolean =false
 
  constructor() { }
  ngOnInit(): void {}

}
