import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) { }

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  baseUrl = environment.baseUrl;

  createPage(userId, websiteId, page)  {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page';
    return this.http.post(url, page).map((response: Response) => {
      return response.json();
    });
  }

  findPageByWebsiteId(userId, websiteId)   {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageById(userId, websiteId, pageId)    {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(userId, websiteId, pageId, page)   {
    const url =  this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(userId, websiteId, pageId)   {
    const url =  this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId;
    return this.http.delete(url);
  }

}
