import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  name:string=''
  newName:string;
  constructor(
    private _userService:UsersService
  ) { }
  onChange(value){
    this.newName=value;
    // console.log('this.name in app compo',this.name)
  }
  onSearchClick(){
	  //test git
	  
    this.name=this.newName;
    console.log('this.name in app compo',this.name);
    this._userService.getUsers(this.name);
  }
}
