
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Page} from '../models/page.model.client';


@Injectable()
export class PageService {
  constructor(private http: Http) {}

  baseURL = environment.baseUrl;

  dumpPage() {
    return new Page(undefined, undefined, undefined, undefined);
  }

  createPage(websiteId: String, page: Page) {
    const url = this.baseURL + '/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllPagesForWebsite(websiteId: String) {
    const url = this.baseURL + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findPagesById(pageId: String) {
    return this.http.get(this.baseURL + '/api/page/' + pageId).map((response: Response) => {
      return response.json();
    });
  }

  updatePage(pageId: String, page: Page) {
    const url =  this.baseURL + '/api/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });
  }

  deletePage(pageId: String) {
    const url =  this.baseURL + '/api/page/' + pageId;
    return this.http.delete(url);
  }
}
