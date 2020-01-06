import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
    private _userService: UserService
  ) { 
    this.page_title = "Identificate";
    this.user = new User('','','','','','','ROLE_USER');
    
  }

  ngOnInit() {
  }

  onSubmit(form){
    // Conseguir objeto del usuario logueado
    this._userService.signup(this.user).subscribe(
      response =>{
        if(response.user && response.user._id){
          this.status = 'success';
          
          // Guardamos el usuario en una propiedad
          this.identity  = response.user;

          // Conseguir el token del usuario identificado
            this._userService.signup(this.user, true).subscribe(
              response =>{
                if(response.token){
                  
                  // Guardar el token del usuario en una propiedad
                  this.token = response.token;
        
                }else{
                  this.status = 'error';
                }
              },
              error =>{
                this.status = 'error';
                console.log(<any>error);
              });

        }else{
          this.status = 'error';
        }
      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      });
  }

}
