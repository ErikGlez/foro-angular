import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';
import { global } from './global';

@Injectable()
export class TopicService{
    public url: string;
    public identity;
    public token;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    addTopic(token, topic): Observable<any>{
        let params = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url+'topic', params, {headers: headers});
    }

    getTopicsByUser(userId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'user-topics/'+userId, {headers:headers});
    }
    
    getTopic(id):Observable<any>{
        return this._http.get(this.url+'topic/'+id);
    }

    update(token,id, topic):Observable<any>{
        let params = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.put(this.url+'topic/'+id, params, {headers: headers});
    }

    delete(token,id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url+'topic/'+id,{headers: headers});
    }

}