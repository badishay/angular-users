import { AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit ,OnChanges } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersComponent implements OnInit {

  constructor(private userService:UserService) { }
  users:User[]=[];

  //getting users from the service
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users=>this.users=users)
  }
  
  updateUser(user:User):void{
    user.id===0?user.id=this.users[this.users.length-1].id +1:null; //if user.id==0 it's a new user so we need to give hin unique id
    this.users= this.users.filter(x=>x.id!==user.id);
    this.users= [user,...this.users].sort((a,b)=>a.id-b.id)
    this.selectedUser=user;
    this.edit=false;
    this.details=true;
    this.newUser=false;
  }
  details:boolean=true;
  edit:boolean=false;
  editUser():void{
    console.log('edit from users comp');
    this.edit=true;
    this.details=false;
    this.newUser=false;
  }

  cancelEdit():void{
    this.edit=false;
    this.newUser=false;
    this.details=true;
    console.log('cancel edit from users comp');
  }

  deleteUser(user:User):void{
    this.users= this.users.filter(x=>x.id!==user.id);
    this.selectedUser=undefined;
    this.edit=false;
    this.newUser=false;
    this.details=true;
    console.log('delete user from users comp');
  }
  newUser:boolean=false;
  addNewUserForm():void{
    console.log('add user form opening');
    this.selectedUser=undefined;
    this.edit=false;
    this.details=false;
    this.newUser=true;
  }

  selectedUser?:User;

  onSelect = (user:User)=>{
    this.selectedUser=user;
    this.edit=false;
    this.newUser=false;
    this.details=true;
  }
  
  ngOnInit(): void {
    this.getUsers();
    console.log('users init');
    console.log(this.selectedUser);
  }
  
}
