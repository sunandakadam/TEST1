import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit,OnDestroy {
  usersData:Users[];
  userName:string;
  ifUserSelected:boolean=false;

  isDataLoadedSubsciption: Subscription;
  constructor(
    private _userService:UsersService
  ) { }

  ngOnInit() {
    this._userService.getUsers('');
    this.usersData=this._userService.usersData;
    console.log('this.usersData',this.usersData)
    this.isDataLoadedSubsciption = this._userService.isDataLoaded.subscribe((isLoaded) => {
    console.log('isLoaded',isLoaded)
    if(isLoaded){
      this.usersData=this._userService.usersData;
      console.log('this.usersData in list',this.usersData);
      this.ifUserSelected=false;
    }
    });


  }

  onUserClick(data){
    this.ifUserSelected=true;
    this.userName=data.name;
  }
  ngOnDestroy(): void {
    if (this.isDataLoadedSubsciption) {
      this.isDataLoadedSubsciption.unsubscribe();
    }
  }

}
