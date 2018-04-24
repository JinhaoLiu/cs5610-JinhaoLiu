import { Widget } from '../models/widget.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class WidgetService {

  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  createWidget(pageId: String, widget: Widget) {
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllWidgetsForPage(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map((res: Response) => {
        return res.json();
      });
  }
  findWidgetById(widgetId: String) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidget(widgetId: String, widget: Widget) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWidget(widgetId: String) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
  }

  reSortWidget(pageId: String, start: String, end: String) {
    const url = this.baseUrl + '/page/' + pageId + '/widget?initial=' + start + '&final=' + end;
    return this.http.put(url, '');
    //   .map((res: Response) => {
    //   return res.json();
    // });
  }
}
