import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class WebsiteService {
  constructor(private http: Http) {}

  baseURL = environment.baseUrl;

  dumpWebsite() {
    return new Website(undefined, undefined, undefined, undefined);
  }

  createWebsite(userId: String, website: Website) {
    const url = this.baseURL + '/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllWebsitesForUser(userId: String) {
    const url = this.baseURL + '/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsitesById(websiteId: String) {
   return this.http.get(this.baseURL + '/api/website/' + websiteId).map((response: Response) => {
     return response.json();
   });
  }

  updateWebsite(websiteId: String, website: Website) {
    const url =  this.baseURL + '/api/website/' + websiteId;
    return this.http.put(url, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId: String) {
    const url =  this.baseURL + '/api/website/' + websiteId;
    return this.http.delete(url);
  }
}
