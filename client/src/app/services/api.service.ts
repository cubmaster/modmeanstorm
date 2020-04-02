import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {environment} from "../../environments/environment";
import {IBase} from "../models/IBase";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL: string = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  constructor(private http: HttpClient) { }

  list(obj: IBase, filter: object = {}): Observable<any> {

    const targetUrl = this.URL + obj.classname.toLowerCase()  + '/list'
    console.log(targetUrl);
    return this.http.post<any>(targetUrl, filter, this.httpOptions);
  }

  create(obj: IBase) {

    const targetUrl = this.URL +  obj.classname.toLowerCase()  + '/create'
    console.log(targetUrl);
    return this.http.post<any>(targetUrl, obj);
  }


}
