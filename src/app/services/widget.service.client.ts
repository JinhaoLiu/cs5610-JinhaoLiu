import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Widget } from '../models/widget.model.client';

// import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

    constructor(private http: Http) { }

    baseUrl = environment.baseUrl;

    // widgets: Widget[] = [
    //     { _id: "123", widgetType: "HEADER", pageId: "321", size: "2", text: "GIZMODO", url: "", width: "" },
    //     { _id: "234", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
    //     { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    //     { _id: "456", widgetType: "HTML", pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "" },
    //     { _id: "567", widgetType: "HEADER", pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "" },
    //     { _id: "678", widgetType: "YOUTUBE", pageId: "321", size: "", text: "", url: "https://youtu.be/AM2Ivdi9c4E", width: "100%" },
    //     { _id: "789", widgetType: "HTML", pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "" }
    // ];

    // api = {
    //     'createWidget': this.createWidget,
    //     'findWidgetsByPageId': this.findWidgetsByPageId,
    //     'findWidgetById': this.findWidgetById,
    //     'updateWidget': this.updateWidget,
    //     'deleteWidget': this.deleteWidget
    // };

    createWidget(pageId: String, widget: Widget) {
        const url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.post(url, widget).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findImage(imageName: String) {
        const url = this.baseUrl + "/api/image/" + imageName;
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findWidgetsByPageId(pageId: String) {
        const url = this.baseUrl + "/api/page/" + pageId + "/widget";
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    findWidgetById(widgetId: String) {
        const url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.get(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    updateWidget(widgetId: String, widget: Widget) {
        const url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.put(url, widget).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    deleteWidget(widgetId: String) {
        const url = this.baseUrl + "/api/widget/" + widgetId;
        return this.http.delete(url).map(
            (res: Response) => {
                return res.json();
            }
        );
    }

    reorderWidgets(startIndex, endIndex, pageId) {
        const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
        return this.http.put(url, '').map(
            (res: Response) => {
                const data = res;
                return data;
            }
        );
    }
}
