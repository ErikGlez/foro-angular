import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { global }  from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit , DoCheck {
  public title = 'foro-angular';
  public identity;
  public token;
  public url;
  public search;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
  }

  ngOnInit(){
    
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
    
  }

  goSearch(){
    this._router.navigate(['/buscar', this.search]);
  }
}
