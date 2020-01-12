import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { global } from '../../services/global';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public page_title: string;
  public users: User[];
  public url;

  constructor(
    private _userService: UserService,
  ) { 
    this.url = global.url;
    this.page_title = 'Compañeros';
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers().subscribe( 
      response => {
        if(response.users){
            this.users = response.users;
        }
      },
      error =>{
        console.log(<any>error)
      }
  
    );
  }
}
