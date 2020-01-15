import { Component, OnInit } from '@angular/core';



import { Router, ActivatedRoute, Params  } from '@angular/router';
import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-search',
  templateUrl: '../topics/topics.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ TopicService]
})
export class SearchComponent implements OnInit {
  public page_title: string;
  public topics: Topic[];
  public no_paginate;
  

  constructor(
    private _topicService: TopicService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.page_title = 'Buscar: ';
    this.no_paginate = true;
  }

  ngOnInit() {

    this._route.params.subscribe(params=>{
      var search = params['search'];
      this.page_title = this.page_title + ' ' +search;
      this.getTopics(search);
    });
  }

  getTopics(search){
    this._topicService.search(search).subscribe(
      response =>{
        this.topics = response.topics;
      },
      error =>{
        console.log(<any>error)
      }
    );
  }

}
