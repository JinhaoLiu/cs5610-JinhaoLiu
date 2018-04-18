import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Website} from '../models/website.model.client';

// injecting service into module
@Injectable()
export class WebsiteService {

  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId, website)  {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesByUser(userId)   {
    const url =  this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(userId, websiteId)   {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(userId, websiteId, newWebsite)   {
    const url =  this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(userId, websiteId)   {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url);
  }

  dumpWebsite() {
    return new Website(undefined, undefined, undefined, undefined);
  }

}
