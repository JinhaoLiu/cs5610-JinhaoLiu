import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) { }

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  baseUrl = environment.baseUrl;

  createWidget(userId, websiteId, pageId, widget)   {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.post(url, widget).map((response: Response) => {
      return response.json();
    });
  }

  findWidgetsByPageId(userId, websiteId, pageId)    {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(userId, websiteId, pageId, widgetId)    {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWidget(userId, websiteId, pageId, widgetId, newWidget)    {
    const url =  this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.put(url, newWidget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(userId, websiteId, pageId, widgetId)    {
    const url =  this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget/' + widgetId;
    return this.http.delete(url);
  }

  reSortWidget(userId, websiteId, pageId: String, start: String, end: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId + '/page/' + pageId + '/widget?initial='
      + start + '&final=' + end;
    return this.http.put(url, '');
  }
}
