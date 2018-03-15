import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Page } from '../models/page.model.client';

// import { Page } from '../models/page.model.client';

@Injectable()
export class PageService {

    constructor(private http: Http) { }

    baseUrl = environment.baseUrl;

    // pages: Page[] = [
    //     { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    //     { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    //     { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
    // ];

    // api = {
    //     'createPage': this.createPage,
    //     'findPageByWebsiteId': this.findPageByWebsiteId,
    //     'findPageById': this.findPageById,
    //     'updatePage': this.updatePage,
    //     'deletePage': this.deletePage
    // };

    createPage(websiteId: String, page: Page) {
        const url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.post(url, page).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findPageByWebsiteId(websiteId: String) {
        const url = this.baseUrl + "/api/website/" + websiteId + "/page";
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findPageById(pageId: String) {
        const url = this.baseUrl + "/api/page/" + pageId;
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    updatePage(pageId: String, page: Page) {
        const url = this.baseUrl + "/api/page/" + pageId;
        return this.http.put(url, page).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    deletePage(pageId: String) {
        const url = this.baseUrl + "/api/page/" + pageId;
        return this.http.delete(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }
}
