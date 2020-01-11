import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ UserService, TopicService ]
})
export class EditComponent implements OnInit {
  public page_title: string;
  public topic: Topic;
  public identity;
  public token;
  public status;

  constructor(
    private _userService: UserService,
    private _topicService: TopicService,
    private _route: ActivatedRoute,
    private _router: Router

  ) {
      
      this.page_title = 'Editar tema';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.topic = new Topic('','','','','','',this.identity._id, null );
   }
 

  ngOnInit() {
    this.getTopic();
  }

  getTopic(){
    this._route.params.subscribe((params)=>{
      let id = params['id'];
      this._topicService.getTopic(id).subscribe(
        response =>{
          if(!response.topic){
            this._router.navigate(['/panle']);
          }else{
            this.topic = response.topic;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }

}
