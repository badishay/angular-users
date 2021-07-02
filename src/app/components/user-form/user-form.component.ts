import { identifierModuleUrl } from '@angular/compiler';
import { Component,Input,Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { User } from '../../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user?: User;
  @Output() newItemEvent = new EventEmitter<User>();
  @Output() cancelEditEvent = new EventEmitter();

  updateUser(user: User) {
    this.newItemEvent.emit(user);
  }
  userForm = new FormGroup({
    name:new FormControl('', [Validators.required,Validators.minLength(4), Validators.maxLength(15)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    address:new FormGroup ({
        street:new FormControl('',[Validators.required]),
        suite:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required])
    }),
    phone:new FormControl('',[Validators.required]),

  });
  onSubmit() {
  
  if(this.userForm.valid){
    this.user?this.updateUser({id:this.user?.id,...this.userForm.value }):this.updateUser({id:0,...this.userForm.value}) 
    console.log('submited!');
  }
  else{
    console.log("validation warning")
  }
  }
  cancelEdit(){
    this.cancelEditEvent.emit();
    // console.log('user form comp cancel');
  }
  constructor() {}
  
  ngOnInit(): void {
  }
  
}
