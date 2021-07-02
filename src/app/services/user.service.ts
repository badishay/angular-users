import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';
// import {USERS} from '../mock-users'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  
  // getUsers() : Observable<User[]> {
  //   const users = of(USERS);
  //   return users;
  // }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
  updateUser(id:number,user:User):void{
    
  }
  
}
