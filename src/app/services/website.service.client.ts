import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { Website } from '../models/website.model.client';

@Injectable()
export class WebsiteService {

    constructor(private http: Http) { }

    baseUrl = environment.baseUrl;

    // websites: Website[] = [
    //     { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    //     { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    //     { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    //     { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    //     { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //     { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    //     { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    // ];

    // api = {
    //     'createWebsite': this.createWebsite,
    //     'findWebsitesByUser': this.findWebsitesByUser,
    //     'findWebsiteById': this.findWebsiteById,
    //     'updateWebsite': this.updateWebsite,
    //     'deleteWebsite': this.deleteWebsite
    // };

    createWebsite(userId: String, website: Website) {
        const url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findWebsitesByUser(userId: String) {
        const url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findWebsiteById(websiteId: String) {
        const url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    updateWebsite(websiteId: String, website: Website) {
        const url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    deleteWebsite(websiteId: String) {
        const url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }
}
