import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';
@Injectable()
export class UserService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    register(user): Observable<any>{
        // Convertir el objeto del usuario a un json string
        let params = JSON.stringify(user);
        
        // Definir las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'Application/json');

        // Hacer peticion ajax
        return this._http.post(this.url+'register', params,{headers: headers});
    }
}