import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersData:Users[];
  isDataLoaded: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _http:HttpClient
  ) { }

  getUsers(name){
    this._http.get<Users[]>('https://jsonplaceholder.typicode.com/users').subscribe(response=>{
    if(name==''){
            this.usersData=response;
            this.isDataLoaded.next(true);
    }
    else{
      this.usersData=response.filter(item=>item.name==name);
      this.isDataLoaded.next(true);
    }

    })
  }


}
