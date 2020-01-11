import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from '../models/topic';
import { Comment } from '../models/commet';
import { global } from './global';

@Injectable()
export class CommentService{
    public url: string;
    public identity;
    public token;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    add(token, commet, topicId): Observable<any>{
        let params = JSON.stringify(commet);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url+'comment/topic/'+topicId, params, {headers: headers});
    }

    delete(token,topicId, commentId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url+'comment/'+topicId +'/'+commentId,{headers: headers});
    }


}