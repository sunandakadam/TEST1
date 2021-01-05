import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @Output() public newName=new EventEmitter();
  constructor(
    private _userService:UsersService
  ) { }

  ngOnInit() {

  }
  onChange(value){
    this.newName.emit(value);
  }
}
